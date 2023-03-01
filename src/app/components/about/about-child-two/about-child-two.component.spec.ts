import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildTwoComponent } from './about-child-two.component';

describe('AboutChildTwoComponent', () => {
  let component: AboutChildTwoComponent;
  let fixture: ComponentFixture<AboutChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutChildTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
