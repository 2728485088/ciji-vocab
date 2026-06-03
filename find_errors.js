const fs = require("fs");
const c = fs.readFileSync("D:/我的文档/桌面/单词/index.html","utf-8");
// Find all phonetic strings that contain escaped single quotes
const regex = /phonetic:'([^']*\\'[^']*)'/g;
let m;
let count = 0;
while ((m = regex.exec(c)) !== null) {
  count++;
  // Find the word name for context
  const preCtx = c.substring(Math.max(0, m.index - 100), m.index);
  const wordMatch = preCtx.match(/word:'([^']+)'/);
  const wordName = wordMatch ? wordMatch[1] : 'unknown';
  console.log(count + '. Word: ' + wordName + ' | Phonetic: ' + m[1]);
}
console.log('\nTotal problematic phonetics: ' + count);