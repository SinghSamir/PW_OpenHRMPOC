
import { test, expect } from '@playwright/test';
import { RandomUtils } from '../utils/RandomUtils';

test('generate random test data', async () => {
  const firstName = RandomUtils.randomText(5);
  const employeeId = RandomUtils.randomNumber(5000, 9999);
  const username = RandomUtils.randomAlphaNumeric(8);
  const email = RandomUtils.randomEmail();
  const employeeName = RandomUtils.randomName('User');

  console.log('First Name:', firstName);
  console.log('Employee ID:', employeeId);
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Employee Name:', employeeName);

  expect(firstName).toHaveLength(5);
  expect(employeeId).toBeGreaterThanOrEqual(5000);
  expect(employeeId).toBeLessThanOrEqual(9999);
  expect(username).toHaveLength(8);
  expect(email).toContain('@example.com');
  expect(employeeName).toContain('User');
});