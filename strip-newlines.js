import fs from 'fs'
import path from 'path'

// List of extensions to consider as "text" files
const textExtensions = [
	'.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.txt', '.css', '.scss', '.html'
]

function stripFinalNewlines(dir) {
	const files = fs.readdirSync(dir)
	for (const file of files) {
		// Skip hidden files/folders
		if (file.startsWith('.')) continue

		const fullPath = path.join(dir, file)
		const stat = fs.statSync(fullPath)

		if (stat.isDirectory()) {
			// Skip node_modules
			if (file === 'node_modules') continue
			stripFinalNewlines(fullPath)
		} else {
			// Only process known text files
			if (!textExtensions.includes(path.extname(file))) continue

			let content = fs.readFileSync(fullPath, 'utf8')
			content = content.replace(/\n+$/g, '') // Remove all trailing newlines
			fs.writeFileSync(fullPath, content)
		}
	}
}

// Adjust folder as needed
stripFinalNewlines('./src')