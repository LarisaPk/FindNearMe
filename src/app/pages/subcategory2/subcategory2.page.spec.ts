import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcategory2Page } from './subcategory2.page';

describe('Subcategory2Page', () => {
  let component: Subcategory2Page;
  let fixture: ComponentFixture<Subcategory2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcategory2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcategory2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
