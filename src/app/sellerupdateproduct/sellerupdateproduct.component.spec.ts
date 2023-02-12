import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerupdateproductComponent } from './sellerupdateproduct.component';

describe('SellerupdateproductComponent', () => {
  let component: SellerupdateproductComponent;
  let fixture: ComponentFixture<SellerupdateproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerupdateproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
