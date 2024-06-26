import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTopoComponent } from './botao-topo.component';

describe('BotaoTopoComponent', () => {
  let component: BotaoTopoComponent;
  let fixture: ComponentFixture<BotaoTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoTopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
