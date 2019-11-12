import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompletedTrainingComponent } from './user-completed-training.component';

describe('UserCompletedTrainingComponent', () => {
  let component: UserCompletedTrainingComponent;
  let fixture: ComponentFixture<UserCompletedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompletedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
