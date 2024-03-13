import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyngComponent } from './anyng.component';

describe('AnyngComponent', () => {
  let component: AnyngComponent;
  let fixture: ComponentFixture<AnyngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
