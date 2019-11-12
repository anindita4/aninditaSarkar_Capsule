import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrentTrainingComponent } from './user-current-training.component';

describe('UserCurrentTrainingComponent', () => {
  let component: UserCurrentTrainingComponent;
  let fixture: ComponentFixture<UserCurrentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurrentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
