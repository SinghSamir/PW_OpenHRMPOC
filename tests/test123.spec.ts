import { test } from '@playwright/test';
import { EmployeeTestData } from '../utils/EmployeeTestData';


test.describe('Employee Tests', () => {
    test.describe.configure({ mode: 'serial' });
    test('Test 1 -should create a new employee', async ({ page }) => {
        EmployeeTestData.firstName = 'Samir';
        EmployeeTestData.middleName = 'K'
        EmployeeTestData.lastName = 'Singh';
        EmployeeTestData.employeeId = 'EMP12345';
        EmployeeTestData.username = 'samir.singh';
        EmployeeTestData.password = 'password123';
    });

    test('Test 2 -retrive emp data', async ({ page }) => {

        console.log('Test started');

        console.log('First Name:', EmployeeTestData.firstName);
        console.log('Middle Name:', EmployeeTestData.middleName);
        console.log('Last Name:', EmployeeTestData.lastName);
        console.log('Employee ID:', EmployeeTestData.employeeId);
        console.log('Username:', EmployeeTestData.username);
        console.log('Password:', EmployeeTestData.password);

    });

});

