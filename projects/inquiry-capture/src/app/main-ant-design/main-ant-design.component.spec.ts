import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAntDesignComponent } from './main-ant-design.component';

describe('MainAntDesignComponent', () => {
  let component: MainAntDesignComponent;
  let fixture: ComponentFixture<MainAntDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAntDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAntDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
