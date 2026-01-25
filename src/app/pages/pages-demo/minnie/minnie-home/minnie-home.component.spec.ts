import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnieHomeComponent } from './minnie-home.component';

describe('MinnieHomeComponent', () => {
  let component: MinnieHomeComponent;
  let fixture: ComponentFixture<MinnieHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinnieHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinnieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
