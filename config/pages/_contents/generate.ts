import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const CONFIG_DIR = 'config/pages/_contents/'
const OUTPUT_DIR = 'pages/'
const SNIPPETS_DIR = '_snippets/'

function loadYaml(filePath: string) {
	return yaml.load(fs.readFileSync(filePath, 'utf8'))
}

function loadSnippet(fileName: string): string {
	const snippetPath = path.join(SNIPPETS_DIR, `${fileName}.snippet`)
	return fs.existsSync(snippetPath)
		? fs.readFileSync(snippetPath, 'utf8').trim()
		: ''
}

function insertSnippet(
	vueContent: string,
	snippets: Record<string, any>,
): string {
	// Check if the file has the /* generate:snippets */ line
	if (!vueContent.includes('/* generate:snippets */')) {
		return vueContent // If not found, return as is
	}

	let updatedContent = vueContent
	const snippetBlocks = Object.keys(snippets)
		.map(loadSnippet)
		.filter(Boolean) // Remove empty snippets
		.join('\n')

	// Replace the marker with the snippets
	updatedContent = updatedContent.replace(
		'/* generate:snippets */',
		`/* generated:snippets */
      ${snippetBlocks}
    /* /generated:snippets */    
   `,
	)

	return updatedContent
}

function generateVueTemplate(config: any) {
	const { layout, children } = config

	const gap = layout.gap ?? '4px'
	const justify = layout.justify ?? 'start'
	const items = layout.items ?? 'stretch'
	const grid = layout.grid || {}
	const slotsConfig: Record<number, { colSpan?: number; rowSpan?: number }> =
		layout.slots || {}

	// Convert slotsConfig to Vue object syntax
	const slotsObject = Object.entries(slotsConfig)
		.map(([slot, config]) => {
			const colSpan = config.colSpan ? `colSpan: ${config.colSpan}` : ''
			const rowSpan = config.rowSpan ? `rowSpan: ${config.rowSpan}` : ''
			const properties = [colSpan, rowSpan].filter(Boolean).join(', ')
			return `${slot}: { ${properties} }`
		})
		.join(', ')

	const slotsAttribute = slotsObject ? `:slots="{ ${slotsObject} }"` : ''

	let slots = children
		.map((child: any, index: number) => {
			const slotConfig = slotsConfig[index] || {}
			const colSpan = slotConfig.colSpan
				? `col-span-${slotConfig.colSpan}`
				: ''
			const rowSpan = slotConfig.rowSpan
				? `row-span-${slotConfig.rowSpan}`
				: ''
			const additionalClasses = `${colSpan} ${rowSpan}`.trim()

			const props = Object.entries(child.props || {})
				.map(
					([key, val]) =>
						`:${key}=${val != null ? `'${JSON.stringify(val)}'` : key}`,
				)
				.join('\n')

			return `<template #slot-${index}>
                <${child.component}
                  class="${child.class ?? 'h-full w-full'} ${additionalClasses}"
                  ${props}
                />
            </template>`
		})
		.join('\n')

	return `
    <!-- generated:content -->
    <GridLayout
        :gap="${gap}"
        justify="${justify}"
        items="${items}"
        :total="${children.length}"
        small="${grid.small ?? 'grid-rows-8 grid-cols-2'}"
        medium="${grid.medium ?? 'md:grid-rows-3 md:grid-cols-3'}"
        large="${grid.large ?? 'lg:grid-rows-2 lg:grid-cols-4'}"
        ${slotsAttribute}
    >
        ${slots}
    </GridLayout>
    <!-- /generated:content -->
    `.trim()
}

function processPages() {
	const files = fs
		.readdirSync(CONFIG_DIR)
		.filter((file) => file.endsWith('.yaml'))

	files.forEach((file) => {
		const config: any = loadYaml(path.join(CONFIG_DIR, file))
		const targetFile = config.page.href?.slice(1) + '.vue'
		const outputFilePath = path.join(OUTPUT_DIR, targetFile)

		if (!fs.existsSync(outputFilePath)) {
			console.warn(`Skipping ${outputFilePath}, file does not exist.`)
			return
		}

		let existingVueContent = fs.readFileSync(outputFilePath, 'utf8')
		const newContent = generateVueTemplate(config)

		// Replace the content inside <!-- generate:content --> tags
		existingVueContent = existingVueContent.replace(
			/<!-- generate:content -->/,
			newContent,
		)

		// Insert snippets only if /* generate:snippets */ exists
		if (config.page.snippets) {
			existingVueContent = insertSnippet(
				existingVueContent,
				config.page.snippets,
			)
		}

		fs.writeFileSync(outputFilePath, existingVueContent, 'utf8')
		console.log(`Updated: ${outputFilePath}`)
	})
}

processPages()
