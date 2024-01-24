import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeInputComponent } from './coffee-input.component';

describe('CoffeeInputComponent', () => {
  let component: CoffeeInputComponent;
  let fixture: ComponentFixture<CoffeeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
