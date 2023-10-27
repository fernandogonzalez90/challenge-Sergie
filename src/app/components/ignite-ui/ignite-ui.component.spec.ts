import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgniteUiComponent } from './ignite-ui.component';

describe('IgniteUiComponent', () => {
  let component: IgniteUiComponent;
  let fixture: ComponentFixture<IgniteUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgniteUiComponent]
    });
    fixture = TestBed.createComponent(IgniteUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
