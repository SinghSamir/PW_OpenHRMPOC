import { Page, Locator } from '@playwright/test'

export class PIMLinks {

    readonly page: Page;
    readonly Configuration : Locator;
    readonly Config_OptionalFields: Locator;
    readonly Config_CustomFields: Locator;
    readonly Config_DataImport:Locator;
    readonly Config_ReportingMethods: Locator;
    readonly Config_TerminationReasons: Locator;
    readonly Employee_List : Locator;
    readonly Add_Employee : Locator;
    readonly Reports: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.Configuration = page.getByText('Configuration');
        this.Config_OptionalFields = page.getByRole('menuitem', { name: 'Optional Fields' });
        this.Config_CustomFields = page.getByRole('menuitem', { name: 'Custom Fields' });
        this.Config_DataImport = page.getByRole('menuitem', { name: 'Data Import' });
        this.Config_ReportingMethods = page.getByRole('menuitem', { name: 'Reporting Methods' });
        this.Config_TerminationReasons = page.getByRole('menuitem', { name: 'Termination Reasons' });
        this.Employee_List = page.getByText('Employee List');
        this.Add_Employee = page.getByText('Add Employee');
        this.Reports = page.getByText('Reports');
    }
}