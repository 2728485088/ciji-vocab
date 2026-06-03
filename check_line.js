const fs = require("fs");
const c = fs.readFileSync("D:/我的文档/桌面/单词/index.html","utf-8");

// Find the agenda word
const idx = c.indexOf("agenda");
ctx = c.substring(idx - 5, idx + 80);
console.log("Context around 'agenda':");
console.log(ctx);
console.log("---");
// Show hex bytes
const buf = Buffer.from(ctx, 'utf-8');
console.log("Hex:", buf.toString('hex'));
console.log("Char codes:", [...ctx].map(ch => ch.charCodeAt(0) + "(" + ch + ")").join(" "));