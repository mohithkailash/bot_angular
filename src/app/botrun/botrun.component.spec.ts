import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotrunComponent } from './botrun.component';

describe('BotrunComponent', () => {
  let component: BotrunComponent;
  let fixture: ComponentFixture<BotrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
