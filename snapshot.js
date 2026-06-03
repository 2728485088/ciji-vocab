const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 480, height: 900 } });

  page.on("console", msg => console.log(`[${msg.type()}] ${msg.text()}`));
  page.on("pageerror", err => console.log(`[ERROR] ${err.message}`));

  await page.goto("file:///D:/%E6%88%91%E7%9A%84%E6%96%87%E6%A1%A3/%E6%A1%8C%E9%9D%A2/%E5%8D%95%E8%AF%8D/index.html", {
    waitUntil: "networkidle",
    timeout: 15000
  });

  await page.waitForTimeout(1500);
  await page.screenshot({ path: "D:\\我的文档\\桌面\\单词\\preview.png", fullPage: true });
  console.log("Screenshot saved!");

  await browser.close();
})();