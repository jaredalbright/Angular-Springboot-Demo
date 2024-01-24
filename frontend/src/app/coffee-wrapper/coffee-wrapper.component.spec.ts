import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeWrapperComponent } from './coffee-wrapper.component';

describe('CoffeeWrapperComponent', () => {
  let component: CoffeeWrapperComponent;
  let fixture: ComponentFixture<CoffeeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
