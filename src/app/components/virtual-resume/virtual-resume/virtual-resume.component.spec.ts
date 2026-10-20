import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualResumeComponent } from './virtual-resume.component';

describe('VirtualResumeComponent', () => {
  let component: VirtualResumeComponent;
  let fixture: ComponentFixture<VirtualResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
