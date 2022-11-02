import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IssueEntryComponent } from './issue-entry/issue-entry.component';
import { IssueReportStatusComponent } from './issue-report-status/issue-report-status.component';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    UserComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
