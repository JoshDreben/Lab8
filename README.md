# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
(1)

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would use a few types of tests for the message feature. A unit test would be good to make sure the low-level functions of writing and sending work, and then I would use an E2E test to make sure the higher level functionalities work as well.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, I would as this is a very low level feature that is very isolated from other features.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
The Browser UI would not show up, and it would probably run much faster

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

