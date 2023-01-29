import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkjUserListComponent } from './akj-user-list.component';

describe('AkjUserListComponent', () => {
  let component: AkjUserListComponent;
  let fixture: ComponentFixture<AkjUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkjUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkjUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
