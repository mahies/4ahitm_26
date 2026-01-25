import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnieSubpage2Component } from './minnie_subpage2.component';

describe('MinnieSubpage2Component', () => {
  let component: MinnieSubpage2Component;
  let fixture: ComponentFixture<MinnieSubpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinnieSubpage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinnieSubpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
