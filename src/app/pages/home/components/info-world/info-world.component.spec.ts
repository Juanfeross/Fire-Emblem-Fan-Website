import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorldComponent } from './info-world.component';

describe('InfoWorldComponent', () => {
  let component: InfoWorldComponent;
  let fixture: ComponentFixture<InfoWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
