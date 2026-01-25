import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnieSubpage1Component } from './minnie_subpage1.component';

describe('MinnieSubpage1Component', () => {
  let component: MinnieSubpage1Component;
  let fixture: ComponentFixture<MinnieSubpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinnieSubpage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinnieSubpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
