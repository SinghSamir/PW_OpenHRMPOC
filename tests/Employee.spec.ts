
import { test, expect } from '@playwright/test';
import { homepage } from '../pages/HomePage';
import { CommonMenu } from '../pages/CommonMenu';
import { PIMLinks } from '../pages/PIMLinks';
import { AddEmployee } from '../pages/PIM/AddEmployee';
import { EmployeeTestData } from '../utils/EmployeeTestData';
import { UserName, Password } from '../utils/env.config';
import { RandomUtils } from '../utils/RandomUtils';
import { EmployeeList } from '../pages/PIM/EmployeeList';



test.describe('Employee Tests', () => {
   test.describe.configure({ mode: 'serial' });
  
   test('Test 1 - should add a new employee', async ({ page }) => {
    // Initialize page objects
    const hp = new homepage(page);
    const cm = new CommonMenu(page);
    const pimLinks = new PIMLinks(page);
    const addEmployee = new AddEmployee(page);

    // Step 1: Login
    await hp.gotoLoginPage();
    await hp.login(UserName, Password);
    await hp.verifyLoginSuccess();

    // Step 2: Navigate to Add Employee
    await cm.PIMLink.click();
    await pimLinks.Add_Employee.click();

    // Step 3: Generate employee test data
    EmployeeTestData.firstName = RandomUtils.randomText(8);
    EmployeeTestData.middleName = RandomUtils.randomText(1);
    EmployeeTestData.lastName = RandomUtils.randomText(6);
    EmployeeTestData.employeeId = `EMP${RandomUtils.randomNumber(101, 999)}`;
    EmployeeTestData.username = `user_${RandomUtils.randomAlphaNumeric(10)}`;
    EmployeeTestData.password = `Aa1!${RandomUtils.randomAlphaNumeric(10)}`;
    
    console.log('Generated First Name:', EmployeeTestData.firstName);
    console.log('Generated Password:', EmployeeTestData.password);
    console.log('Generated Last Name:', EmployeeTestData.lastName);
    console.log('Generated employee ID:', EmployeeTestData.employeeId);
    console.log('Generated username:', EmployeeTestData.username);

    // Step 4: Fill employee form and enable login details
    await addEmployee.fillEmployeeFormWithLogin(
      EmployeeTestData.firstName,
      EmployeeTestData.middleName,
      EmployeeTestData.lastName,
      EmployeeTestData.employeeId,
      EmployeeTestData.username,
      EmployeeTestData.password,
    );

    // Step 5: Save employee and verify success
    await addEmployee.saveEmployee();
    //await page.waitForTimeout(5000);
  });

  test('Test 2 - Verify employee is added', async ({ page }) => {
    // Initialize page objects
    // Initialize page objects
    const hp = new homepage(page);
    const cm = new CommonMenu(page);
    const pimLinks = new PIMLinks(page);
    const addEmployee = new AddEmployee(page);
    const employeeList = new EmployeeList(page);


      // Step 1: Login
    await hp.gotoLoginPage();
    await hp.login(UserName, Password);
    await hp.verifyLoginSuccess();

    // Step 2: Navigate to Add Employee
    await cm.PIMLink.click();
    


    // Step 3: Verify employee is added successfully
    
    await employeeList.employeeID.fill(EmployeeTestData.employeeId);
    await employeeList.searchButton.click();
    await expect(employeeList.recordFound).toBeVisible();
    console.log('Employee added successfully');
  });

  test('Test 3 - should delete an employee', async ({ page }) => {
    // Initialize page objects
    const hp = new homepage(page);
    const cm = new CommonMenu(page);
    const pimLinks = new PIMLinks(page);
    const employeeList = new EmployeeList(page);

    // Step 1: Login
    await hp.gotoLoginPage();
    await hp.login(UserName, Password);
    await hp.verifyLoginSuccess();

    // Step 2: Navigate to Employee List
    await cm.PIMLink.click();
    await pimLinks.Employee_List.click();

    // Step 3: Delete employee by ID
    await employeeList.employeeID.fill(EmployeeTestData.employeeId);
    await employeeList.searchButton.click();
    await expect(employeeList.recordFound).toBeVisible();
    await employeeList.deleteButton.click();
    await employeeList.confirmDeleteButton.click();
    await page.waitForTimeout(5000);
    console.log('test3');

    // Add deletion logic here (e.g., click delete button and confirm)
  });
});
