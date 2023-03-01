import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildOneComponent } from './about-child-one.component';

describe('AboutChildOneComponent', () => {
  let component: AboutChildOneComponent;
  let fixture: ComponentFixture<AboutChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutChildOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
