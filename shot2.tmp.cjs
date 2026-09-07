const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1700, height: 1000 } });
  await page.goto("http://localhost:5183/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(4000);

  for (let i = 0; i < 40; i++) {
    await page.mouse.wheel(0, 250);
    await page.waitForTimeout(100);
    const rect = await page.evaluate(() => {
      const cards = document.querySelectorAll(".what-content");
      if (!cards.length) return null;
      const el = cards[0];
      const r = el.getBoundingClientRect();
      return { top: r.top, bottom: r.bottom };
    });
    if (rect && rect.top > -50 && rect.top < 300) break;
  }

  // Wait for smooth-scroll easing to fully settle
  let lastY = -1;
  for (let i = 0; i < 30; i++) {
    const y = await page.evaluate(() => window.scrollY || document.documentElement.scrollTop);
    if (Math.abs(y - lastY) < 0.5) break;
    lastY = y;
    await page.waitForTimeout(200);
  }

  await page.screenshot({ path: "whatido-settled.png" });

  const cards = await page.$$(".what-content");
  if (cards[0]) {
    const box = await cards[0].boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + Math.min(120, box.height / 2), { steps: 8 });
      await page.waitForTimeout(1000);
    }
  }
  await page.screenshot({ path: "whatido-hover2.png" });

  console.log("done");
  await browser.close();
})();
