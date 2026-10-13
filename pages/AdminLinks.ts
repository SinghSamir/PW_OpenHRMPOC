import { Page, Locator } from '@playwright/test'


export class AdminLinks {

    readonly page: Page;
    readonly UserManagement: Locator;
    readonly UserManagement_User: Locator;
    readonly Job: Locator;
    readonly Job_JobTitle: Locator;
    readonly Job_PayGrade: Locator;
    readonly Job_EmploymentStatus: Locator;
    readonly Job_Category: Locator;
    readonly Job_WorkShifts: Locator;
    readonly Organization: Locator;
    readonly Organization_GeneralInformation: Locator;
    readonly Organization_Locations: Locator;
    readonly Organization_Structure: Locator;

    constructor(page: Page) {
        this.page = page;
        this.UserManagement = page.getByText('User Management');
        this.UserManagement_User = page.getByRole('menuitem', { name: 'Users' })
        this.Job = page.getByText('Job');
        this.Job_JobTitle = page.getByRole('menuitem', { name: 'Job Titles' });
        this.Job_PayGrade = page.getByRole('menuitem', { name: 'Pay Grades' });
        this.Job_EmploymentStatus = page.getByRole('menuitem', { name: 'Employment Status' });
        this.Job_Category = page.getByRole('menuitem', { name: 'Job Categories' });
        this.Job_WorkShifts = page.getByRole('menuitem', { name: 'Work Shifts' });
        this.Organization = page.getByRole('menuitem', { name: 'Organization' });
        this.Organization_GeneralInformation = page.getByRole('menuitem', { name: 'General Information' });
        this.Organization_Locations = page.getByRole('menuitem', { name: 'Locations' });
        this.Organization_Structure = page.getByRole('menuitem', { name: 'Structure' });
    }


}
