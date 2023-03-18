const puppeteer = require('puppeteer');

//?facebook keeps blocking my request... just use twitter and maybe a different API

class ProfileScrapper {
	static async getProfileSrc(url, path) {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		await page.setUserAgent(
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
		);

		try {
			await page.goto(`https://www.${url}.com/${path}`, { waitUntil: 'networkidle0' });
			await page.waitForSelector('img', { visible: true });
			// await page.screenshot({ path: '2.png' });

			let data = await page.evaluate(() => {
				let img1 = document.querySelectorAll('img')[1].attributes[2].textContent;
				let img2 = document.querySelectorAll('img')[0].attributes[2].textContent;

				return [ img1, img2 ];
			});

			let profilePic = data.find((url) => {
				if (url.startsWith('images', 30)) {
					return url;
				}
			});

			// console.log('In side wbscrapper--->', profilePic);
			await browser.close();
			return profilePic;
		} catch (e) {
			console.log('** From scrapper **', `HERE IS THE PATH ${path}`);
		}
	}
}

// ProfileScrapper.getProfileSrc('facebook', 'lebron');

module.exports = ProfileScrapper;
