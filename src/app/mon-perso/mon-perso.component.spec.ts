import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPersoComponent } from './mon-perso.component';

describe('MonPersoComponent', () => {
  let component: MonPersoComponent;
  let fixture: ComponentFixture<MonPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
