import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkjFishComponent } from './akj-fish.component';

describe('AkjFishComponent', () => {
  let component: AkjFishComponent;
  let fixture: ComponentFixture<AkjFishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkjFishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkjFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
