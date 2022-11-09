import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { IssueEntryComponent } from './issue-entry/issue-entry.component';
import { IssueReportStatusComponent } from './issue-report-status/issue-report-status.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '',   component:UserComponent, children:[
    { path: 'Issue-entry', component: IssueEntryComponent },
    { path: 'issue_report', component: IssueReportStatusComponent },
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
