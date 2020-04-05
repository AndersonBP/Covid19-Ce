import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeComponent } from './informative.component';

describe('informativeComponent', () => {
  let component: InformativeComponent;
  let fixture: ComponentFixture<InformativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
