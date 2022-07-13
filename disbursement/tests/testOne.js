require('dotenv').config();
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        //To go to the test website from the browser with our code.
        // await driver.get(process.env.SAGAMY_URL);
        await driver.get("https://bulk.astrapay.com.ng");

        //To enter data inside the text area
        await driver
            .findElement(By.id("username"))
            .sendKeys("08144964388", Key.RETURN);
            // .sendKeys(process.env.ASTRA_ID, Key.RETURN);

        //To click on "Generate File" button
        await driver.findElement(By.id("password"))
            .sendKeys("donadams50", Key.RETURN);
            // .sendKeys(process.env.ASTRA_PASSWORD, Key.RETURN);
           
            //Wait for 5s in case there is a pop up on the site
            await driver.sleep(5000);

            //To click on "Generate File" button
        await driver.findElement(By.id("signIn")).click();

        // //To click on "Download" link
        // await driver.findElement(By.id("link-to-download")).click();

        // //Wait for 60s till page loading is completed
        await driver.sleep(60000);
    } catch (e) {
        console.log("Error Occured:", e.name);
        console.log("Error Occured ========:", e);
    }
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
}

example();