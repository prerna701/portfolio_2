const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 950 } });
  await page.goto("http://localhost:5183/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(4000);

  let found = false;
  for (let i = 0; i < 60; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(120);
    const rect = await page.evaluate(() => {
      const el = document.querySelector(".what-content");
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const style = getComputedStyle(el.parentElement);
      return { top: r.top, bottom: r.bottom, height: r.height, parentDisplay: style.display };
    });
    if (rect && rect.parentDisplay !== "none" && rect.top < 700 && rect.bottom > 100) {
      found = true;
      break;
    }
  }
  console.log("found section in viewport:", found);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: "whatido-full.png" });

  const firstCard = await page.$(".what-content");
  if (firstCard) {
    const box = await firstCard.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 3, { steps: 5 });
      await page.waitForTimeout(900);
    }
  }
  await page.screenshot({ path: "whatido-hover.png" });

  console.log("done");
  await browser.close();
})();
