### Dashboard Layout - Quick Brainstorm Notes

#### Goal

- Generate `.vue` layouts from config (YAML/JSON)
- Auto-generate, but allow manual edits too
- AI-friendly configs

#### Ideas

- Special comments like `<!-- #custom_layout# -->` to inject layout code
- CLI/TUI tool can scan .vue, insert code at comment
- Want to pass Hygen answers via one Bash cmd → YES possible (env vars)

#### Layout Component Plan

- Make **LayoutHV.vue**
- Props:
    - direction: row/column
    - children: [{ title, basis, grow }]
- v-for → slots → default skeleton if empty

Example usage:

```html
<LayoutHV
	:direction="'row'"
	:children="[{ title: 'Card' }, { title: 'Table' }]"
>
	<template #slot0><MyCard /></template>
	<template #slot1><MyTable /></template>
</LayoutHV>
```

#### Optional

- Allow nested layouts in config
- Generate everything from YAML
- (Later) Add TUI for config editing

#### Next

- Write LayoutHV.vue
- Draft simple YAML schema
- Make Hygen script pre-filled
- (Optional) Add comment injector

---
