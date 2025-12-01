import fs from 'fs'
import path from 'path'
import ejs from 'ejs'

const CONFIG_DIR = path.resolve('./config/pages')
const TEMPLATE_DIR = path.resolve('./config/pages/_templates')
const PAGES_DIR = path.resolve('./pages')

const ensureDirExists = (dir: string) => {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

const configFiles = fs
	.readdirSync(CONFIG_DIR)
	.filter(
		(file) =>
			file.endsWith('.ts') &&
			file !== 'index.ts' &&
			!file.startsWith('_common') &&
			!file.startsWith('_templates'),
	)

configFiles.forEach((file) => {
	const filePath = path.join(CONFIG_DIR, file)
	const content = fs.readFileSync(filePath, 'utf-8')

	const hrefMatch = content.match(/href:\s*['"]([^'"]+)['"]/)
	const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
	const descMatch = content.match(/desc:\s*['"]([^'"]+)['"]/)
	const tourDesc = content.match(/tourDesc:\s*['"]([^'"]+)['"]/)
	const layoutMatch = content.match(/layout:\s*['"]([^'"]+)['"]/)
	const templateMatch = content.match(/template:\s*['"]([^'"]+)['"]/)

	if (!hrefMatch) return

	const href = hrefMatch[1]
	const title = titleMatch ? titleMatch[1] : 'Untitled'
	const description = descMatch ? descMatch[1] : tourDesc ? tourDesc[1] : ''
	const layout = layoutMatch ? layoutMatch[1] : 'dashboard-page'
	const template = templateMatch ? templateMatch[1] : 'default'

	const pagePath = path.join(PAGES_DIR, href.replace(/^\//, '')) + '.vue'
	ensureDirExists(path.dirname(pagePath))

	if (fs.existsSync(pagePath)) {
		console.log(`Skipping: ${pagePath} (already exists)`)
		return
	}

	// Load the selected template
	const templatePath = path.join(TEMPLATE_DIR, `${template}.ejs`)
	if (!fs.existsSync(templatePath)) {
		console.log(`Error: Template ${template}.ejs not found!`)
		return
	}

	const templateContent = fs.readFileSync(templatePath, 'utf-8')
	const vueContent = ejs.render(templateContent, {
		title,
		description,
		layout,
	})

	fs.writeFileSync(pagePath, vueContent, 'utf-8')
	console.log(`Generated: ${pagePath}`)
})

console.log('Page generation complete.')
