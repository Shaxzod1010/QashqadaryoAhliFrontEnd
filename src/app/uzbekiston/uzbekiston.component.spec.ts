import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzbekistonComponent } from './uzbekiston.component';

describe('UzbekistonComponent', () => {
  let component: UzbekistonComponent;
  let fixture: ComponentFixture<UzbekistonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzbekistonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UzbekistonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
