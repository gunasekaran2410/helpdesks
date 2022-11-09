import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminIssueEntryComponent } from './admin-issue-entry/admin-issue-entry.component';
import { AdminIssueReportStatusComponent } from './admin-issue-report-status/admin-issue-report-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueCategoryComponent } from './issue-category/issue-category.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { UserRegistartionComponent } from './user-registartion/user-registartion.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AdminComponent,
    AdminIssueEntryComponent,
    AdminIssueReportStatusComponent,
    DashboardComponent,
    IssueCategoryComponent,
    ItemMasterComponent,
    UserRegistartionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BsDatepickerModule.forRoot(),
    AdminRoutingModule
  ]
})
export class AdminModule { }
