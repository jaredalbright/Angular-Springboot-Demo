import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDisplayComponent } from './coffee-display.component';


describe('CoffeeDisplayComponent', () => {
  let component: CoffeeDisplayComponent;
  let fixture: ComponentFixture<CoffeeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
