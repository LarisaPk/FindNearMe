import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcategory1Page } from './subcategory1.page';

describe('Subcategory1Page', () => {
  let component: Subcategory1Page;
  let fixture: ComponentFixture<Subcategory1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcategory1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcategory1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
