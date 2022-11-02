import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-report-status',
  templateUrl: './issue-report-status.component.html',
  styleUrls: ['./issue-report-status.component.scss']
})
export class IssueReportStatusComponent implements OnInit {

  bsValue = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
