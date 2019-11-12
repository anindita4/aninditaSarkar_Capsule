import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMentorReqComponent } from './send-mentor-req.component';

describe('SendMentorReqComponent', () => {
  let component: SendMentorReqComponent;
  let fixture: ComponentFixture<SendMentorReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMentorReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMentorReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
