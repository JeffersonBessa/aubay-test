# aubay-test

Test Automation Project using the JavaScript programming language and the Cypress Framework for automated testing

### Test Development

For the development of the proposed test scenarios, the PageObjects design pattern was used to reduce code duplication, improve test maintenance and organize files that represent the page identifiers of the application under test, as well as, the test files that include the actions of each step of the test to be carried out.
In addition, the Faker library was used to generate random data to fill out forms.

### Test Execution

To run automated tests, you must execute the command: "npx cypress open" (Runs Cypress in Interactive Mode) OR "npx cypress run" (Runs Cypress in Headless Mode). 

* Prerequisites:

- Ensure that Cypress was successfully installed in version 12.x.x or higher, running the command: "npm install -D cypress@12.2.0" (install Cypress as a development dependency of the test project);
- Install Faker dependency, running the command: "npm install --save-dev @faker-js/faker";
- Have node.js installed using NPM (Node Package Manager), using the command: "sudo apt install npm".

### Automated Test Cases Developed

The following proposed test cases were automated:

- Login with Valid Credentials;
- Adding Products to Cart;
- Completes a Purchase.

