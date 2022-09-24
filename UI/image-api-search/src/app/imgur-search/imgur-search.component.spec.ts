import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgurSearchComponent } from './imgur-search.component';

describe('ImgurSearchComponent', () => {
  let component: ImgurSearchComponent;
  let fixture: ComponentFixture<ImgurSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgurSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgurSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
