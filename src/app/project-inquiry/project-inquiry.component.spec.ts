import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInquiryComponent } from './project-inquiry.component';

describe('ProjectInquiryComponent', () => {
  let component: ProjectInquiryComponent;
  let fixture: ComponentFixture<ProjectInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectInquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
