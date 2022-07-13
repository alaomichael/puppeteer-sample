const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        //To go to the test website from the browser with our code.
        await driver.get("http://demo.automationtesting.in/FileDownload.html");

        //To enter data inside the text area
        await driver
            .findElement(By.id("textbox"))
            .sendKeys("I love testing!", Key.RETURN);

        //To click on "Generate File" button
        await driver.findElement(By.id("createTxt")).click();


        //Wait for 5s in case there is a pop up on the site
        await driver.sleep(5000);

        //To click on "Download" link
        await driver.findElement(By.id("link-to-download")).click();

        //Wait for 5s till download is completed
        await driver.sleep(5000);
    } catch (e) {
        console.log("Error Occured ========:", e);
        console.log("Error Occured:", e.name);
    }
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
}

example();