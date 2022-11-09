import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIssueEntryComponent } from './admin-issue-entry/admin-issue-entry.component';
import { AdminIssueReportStatusComponent } from './admin-issue-report-status/admin-issue-report-status.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueCategoryComponent } from './issue-category/issue-category.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { UserRegistartionComponent } from './user-registartion/user-registartion.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    { path: 'admin_issue_entry', component: AdminIssueEntryComponent },
    { path: 'admin_issue_report', component: AdminIssueReportStatusComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'issue_category', component: IssueCategoryComponent },
    { path: 'item_master', component: ItemMasterComponent },
    { path: 'user_registrations', component: UserRegistartionComponent },

  ] },

  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
