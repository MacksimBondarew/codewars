const puppeteer = require("puppeteer");
const axios = require("axios");
const cheerio = require("cheerio");

async function getFilmPhotos() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const url = "https://kinohata.com.ua/filmi-2023-roku";
    
    await page.goto(url, { timeout: 20000 }); // Set a longer timeout (e.g., 60 seconds)

    
    // Wait for the page to be fully loaded
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    
    const html = await page.content();
    
    await browser.close();
    
    const $ = cheerio.load(html);
    
    const filmElements = $(".entry-content h2");
    const films = [];
    
    for (let index = 0; index < filmElements.length; index++) {
        const filmElement = filmElements[index];
        const filmName = $(filmElement).text().trim();
        
        // Wait for the previous navigation to complete before starting the next one
        await page.waitForTimeout(1000); // Adjust the delay as needed
        
        const photoUrl = await getPhotoUrlByAlt(page, filmName);
        
        const filmInfo = {
            name: filmName,
            photoUrl: photoUrl,
        };
        
        films.push(filmInfo);
    }
    
    console.log(films);
}

async function getPhotoUrlByAlt(page, alt) {
    const imgSelector = `img[alt="${alt}"]`;
    await page.waitForSelector(imgSelector, { visible: true, timeout: 10000 });
    const imgElement = await page.$(imgSelector);
    const photoUrl = await imgElement.evaluate((img) => img.src);
    return photoUrl;
}


getFilmPhotos().catch((error) => {
    console.error("Помилка запиту:", error);
});
