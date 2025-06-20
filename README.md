> [!NOTE]
> Install Node.js, VS Code and Playwright

To run all tests use command "npx playwright test" (runs all tests on all browsers in headless mode)

To run only one test use command "npx playwright test TestName.spec.js"

To run test only on Chromium browser use command "npx playwright test TestName.spec.js --project=chromium"

To run test only on Chromium but on headed mode use command "npx playwright test TestName.spec.js --project=chromium --headed"

To see report use command "npx playwright show-report"
