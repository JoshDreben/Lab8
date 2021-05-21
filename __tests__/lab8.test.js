describe("Basic user flow for SPA ", () => {
  beforeAll(async () => {
    await page.goto("http://127.0.0.1:5500/");
    //await page.waitForNavigation();
  });

  // test 1 is given
  it("Test1: Initial Home Page - Check for 10 Journal Entries", async () => {
    const numEntries = await page.$$eval("journal-entry", (entries) => {
      return entries.length;
    });
    expect(numEntries).toBe(10);
  });

  // test 2 is given
  // it("Test2: Make sure <journal-entry> elements are populated", async () => {
  //   let allArePopulated = true;
  //   let data, plainValue;
  //   const entries = await page.$$("journal-entry");
  //   for (let i = 0; i < entries.length; i++) {
  //     data = await entries[i].getProperty("entry");
  //     plainValue = await data.jsonValue();
  //     if (plainValue.title.length == 0) {
  //       allArePopulated = false;
  //     }
  //     if (plainValue.date.length == 0) {
  //       allArePopulated = false;
  //     }
  //     if (plainValue.content.length == 0) {
  //       allArePopulated = false;
  //     }
  //   }
  //   expect(allArePopulated).toBe(true);
  // }, 30000);

  it("Test3: Clicking first <journal-entry>, new URL should contain /#entry1", async () => {
    // implement test3: Clicking on the first journal entry should update the URL to contain “/#entry1”
    var click = await page.click("journal-entry");
    expect(page.url()).toBe("http://127.0.0.1:5500/#entry1");
  });

  it("Test4: On first Entry page - checking page header title", async () => {
    // implement test4: Clicking on the first journal entry should update the header text to “Entry 1”
    await page.reload();
    await page.click("journal-entry");
    const val = await page.$eval("h1", (el) => el.textContent);
    // const val = await page.$eval("h1", (el) => el.textContent);
    expect(val).toBe("Entry 1");
  }, 30000);

  it("Test5: On first Entry page - checking <entry-page> contents", async () => {
    await page.reload();
    await page.click("journal-entry");
    const entryData = await (
      await (await page.$("journal-entry")).getProperty("entry")
    ).jsonValue();
    expect(entryData.title).toBe("You like jazz?");
    expect(entryData.date).toBe("4/25/2021");
    expect(entryData.content).toBe(
      "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."
    );
    expect(entryData.image.src).toBe(
      "https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455"
    );
    expect(entryData.image.alt).toBe("bee with sunglasses");
  }, 10000);

  it("Test6: On first Entry page - checking <body> element classes", async () => {
    await page.reload();
    await page.click("journal-entry");
    const bodyClass = await page.$eval("body", (el) => el.className);
    expect(bodyClass).toBe("single-entry");
  }, 10000);

  it("Test7: Clicking the settings icon, new URL should contain #settings", async () => {
    // implement test7: Clicking on the settings icon should update the URL to contain “/#settings”
    await page.goto("http://127.0.0.1:5500/");
    await page.click("img");
    expect(page.url()).toBe("http://127.0.0.1:5500/#settings");
  }, 10000);

  it("Test8: On Settings page - checking page header title", async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”
    await page.reload();
    await page.click("img");
    const val = await page.$eval("h1", (el) => el.textContent);
    // const val = await page.$eval("h1", (el) => el.textContent);
    expect(val).toBe("Settings");
  }, 10000);

  it("Test9: On Settings page - checking <body> element classes", async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    await page.reload();
    await page.click("img");
    const bodyClass = await page.$eval("body", (el) => el.className);
    expect(bodyClass).toBe("settings");
  }, 10000);

  it("Test10: Clicking the back button, new URL should be /#entry1", async () => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’
    await page.goto("http://127.0.0.1:5500/");
    await page.click("journal-entry");
    await page.click("img");
    await page.goBack();
    expect(page.url()).toBe("http://127.0.0.1:5500/#entry1");
  }, 10000);

  // define and implement test11: Clicking the back button once should bring the user back to the home page

  it("Test11: Clicking the back button once should bring the user back to the home page", async () => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’
    await page.goBack();
    expect(page.url()).toBe("http://127.0.0.1:5500/");
  }, 10000);
  // define and implement test12: When the user if on the homepage, the header title should be “Journal Entries”

  it("Test12:When the user if on the homepage, the header title should be “Journal Entries”", async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”
    const val = await page.$eval("h1", (el) => el.textContent);
    // const val = await page.$eval("h1", (el) => el.textContent);
    expect(val).toBe("Journal Entries");
  }, 10000);
  // define and implement test13: On the home page the <body> element should not have any class attribute
  it("Test13:On the home page the <body> element should not have any class attribute", async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const bodyClass = await page.$eval("body", (el) => el.className);
    expect(bodyClass).toBe("");
  }, 10000);

  // define and implement test14: Verify the url is correct when clicking on the second entry

  it("Test14: Verify the url is correct when clicking on the second entry", async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    await page.click("journal-entry:nth-child(2)");
    expect(page.url()).toBe("http://127.0.0.1:5500/#entry2");
  }, 10000);
  // define and implement test15: Verify the title is current when clicking on the second entry
  it("Test15: Verify the title is current when clicking on the second entry", async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const val = await page.$eval("h1", (el) => el.textContent);
    // const val = await page.$eval("h1", (el) => el.textContent);
    expect(val).toBe("Entry 2");
  }, 10000);

  // define and implement test16: Verify the entry page contents is correct when clicking on the second entry
  it("Test16: Verify the entry page contents is correct when clicking on the second entry", async () => {
    await page.goto("http://127.0.0.1:5500/");
    await page.click("journal-entry:nth-child(2)");
    const entryData = await (
      await (await page.$$("journal-entry"))[1].getProperty("entry")
    ).jsonValue();
    expect(entryData.title).toBe("Run, Forrest! Run!");
    expect(entryData.date).toBe("4/26/2021");
    expect(entryData.content).toBe(
      "Mama always said life was like a box of chocolates. You never know what you're gonna get."
    );
    expect(entryData.image.src).toBe(
      "https://s.abcnews.com/images/Entertainment/HT_forrest_gump_ml_140219_4x3_992.jpg"
    );
    expect(entryData.image.alt).toBe("forrest running");
  }, 10000);

  it("Test17: Verify the url is correct when clicking on the third entry", async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    await page.goto("http://127.0.0.1:5500/");
    await page.click("journal-entry:nth-child(3)");
    expect(page.url()).toBe("http://127.0.0.1:5500/#entry3");
  }, 10000);
  // define and implement test15: Verify the title is current when clicking on the second entry
  it("Test18: Verify the title is current when clicking on the third entry", async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const val = await page.$eval("h1", (el) => el.textContent);
    // const val = await page.$eval("h1", (el) => el.textContent);
    expect(val).toBe("Entry 3");
  }, 10000);

  // create your own test 19
  it("Test19: Click on settings from entry 3 should work as normal", async () => {
    await page.click("img");
    expect(page.url()).toBe("http://127.0.0.1:5500/#settings");
  }, 10000);

  // create your own test 20
  it("Test20: Go back and forth should bring us back to settings as well", async () => {
    await page.goBack();
    await page.goForward();
    expect(page.url()).toBe("http://127.0.0.1:5500/#settings");
  }, 10000);
});
