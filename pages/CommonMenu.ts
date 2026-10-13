import { Page, Locator } from '@playwright/test'

export class CommonMenu {

    readonly page: Page;
    readonly Logo: Locator;
    readonly SearchBox: Locator;
    readonly AdminLink: Locator;
    readonly PIMLink: Locator;
    readonly LeaveLink: Locator;
    readonly TimeLink: Locator;
    readonly RecruitmentLink: Locator;
    readonly PerformanceLink: Locator;
    readonly JobLink: Locator;
    readonly ReportsLink: Locator;
    readonly MaintenanceLink: Locator;
    readonly HelpLink: Locator; 
    readonly LogoutLink: Locator;
    readonly ProfileDropdown: Locator;


    constructor(page: Page) {
        this.page = page;
       this.Logo = page.getByRole('link', { name: 'client brand banner' });
       this.SearchBox = page.getByRole('textbox', { name: 'Search' });
       this.AdminLink = page.getByRole('link', { name: 'Admin' });
       this.PIMLink = page.getByRole('link', { name: 'PIM' });
       this.LeaveLink = page.getByRole('link', { name: 'Leave' });
       this.TimeLink = page.getByRole('link', { name: 'Time' });
       this.RecruitmentLink = page.getByRole('link', { name: 'Recruitment' });
       this.PerformanceLink = page.getByRole('link', { name: 'Performance' });
       this.JobLink = page.getByRole('link', { name: 'Job' });
       this.ReportsLink = page.getByRole('link', { name: 'Reports' });
       this.MaintenanceLink = page.getByRole('link', { name: 'Maintenance' });
       this.HelpLink = page.getByRole('link', { name: 'Help' });
       this.LogoutLink = page.getByRole('link', { name: 'Logout' });
       this.ProfileDropdown = page.locator("//p[@class='oxd-userdropdown-name']");
    }

}
