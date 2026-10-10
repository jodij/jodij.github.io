const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const html = readFileSync(join(__dirname, '..', 'index.html'), 'utf8');

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));
const links = [...html.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map(([, href]) => href);
assert(links.filter(href => href.startsWith('#')).every(href => ids.has(href.slice(1))), 'All internal links resolve');
assert(links.includes('#proyek'), 'Projects are reachable from the page');
assert(links.includes('mailto:jodi.jonathan@hotmail.com'), 'Contact email is available');
assert(html.includes('<span class="resume-status">CV segera tersedia</span>'), 'Unavailable CV is not an interactive control');
assert(!links.some(href => href.includes('cv.pdf')), 'There is no broken CV download');
console.log('Portfolio links and CV status OK');
