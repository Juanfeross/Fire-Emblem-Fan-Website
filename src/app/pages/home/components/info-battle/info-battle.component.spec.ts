import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBattleComponent } from './info-battle.component';

describe('InfoBattleComponent', () => {
  let component: InfoBattleComponent;
  let fixture: ComponentFixture<InfoBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBattleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
