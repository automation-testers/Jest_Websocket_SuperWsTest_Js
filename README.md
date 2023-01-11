Jest-Allure reporting plugin
Add more power to your tests using Jest-Allure. Easily generate nice reports at the end of the execution.
Awesome License: MIT PRs Welcome

GitHub followers GitHub stars GitHub watchers

Examples
Report example
Visual unit tests with allure report. Demo project
Simple integration test
Allure Report

Allure Framework is a flexible lightweight multi-language test report tool that not only shows a very concise representation of what have been tested in a neat web report form, but allows everyone participating in the development process to extract maximum of useful information from everyday execution of tests.

Installation
yarn add -D jest-allure
or

npm install --save-dev jest-allure
Uses Jest-circus or jest -v >27 ?
Jest-allure doesn't support jest-circus. (but PR's are welcome)

As starting from jest@27 it uses jest-circus as default testrunner you must update jest.config.js and set:

"testRunner": "jest-jasmine2"
jest -v >24 ?
Then add jest-allure/dist/setup to setupFilesAfterEnv section of your config.

setupFilesAfterEnv: ["jest-allure/dist/setup"]
jest -v < 24 ?
add reporter to jest.config.js
reporters: ["default", "jest-allure"],
Run your tests and enjoy 🥤🚀

How to get a report
You need to install the CLI in order to obtain a report.

To see a report in browser, run in console

allure serve
If you want to generate html version, run in console

allure generate