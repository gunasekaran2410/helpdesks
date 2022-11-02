import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueEntryComponent } from './issue-entry.component';

describe('IssueEntryComponent', () => {
  let component: IssueEntryComponent;
  let fixture: ComponentFixture<IssueEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
