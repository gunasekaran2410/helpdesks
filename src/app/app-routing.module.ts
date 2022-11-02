import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueEntryComponent } from './user/issue-entry/issue-entry.component';
import { IssueReportStatusComponent } from './user/issue-report-status/issue-report-status.component';

const routes: Routes = [
  { path: '', component: IssueEntryComponent },
  { path: 'issue_entry', component: IssueEntryComponent },
  { path: 'issue_report', component: IssueReportStatusComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  // { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
