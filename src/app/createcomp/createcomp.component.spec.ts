import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompComponent } from './createcomp.component';

describe('CreatecompComponent', () => {
  let component: CreatecompComponent;
  let fixture: ComponentFixture<CreatecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
