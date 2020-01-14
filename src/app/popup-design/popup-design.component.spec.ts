import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDesignComponent } from './popup-design.component';

describe('PopupDesignComponent', () => {
  let component: PopupDesignComponent;
  let fixture: ComponentFixture<PopupDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
