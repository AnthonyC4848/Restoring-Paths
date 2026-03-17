import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve(process.cwd(), 'dist')
const indexFile = resolve(distDir, 'index.html')
const notFoundFile = resolve(distDir, '404.html')
const cnameFile = resolve(distDir, 'CNAME')
const noJekyllFile = resolve(distDir, '.nojekyll')

copyFileSync(indexFile, notFoundFile)
writeFileSync(cnameFile, 'restoringpaths.com\n', 'utf8')
writeFileSync(noJekyllFile, '', 'utf8')

console.log('Prepared dist for GitHub Pages: 404.html, CNAME, .nojekyll')
