import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexelsSearchComponent } from './pexels-search.component';

describe('PexelsSearchComponent', () => {
  let component: PexelsSearchComponent;
  let fixture: ComponentFixture<PexelsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PexelsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PexelsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
