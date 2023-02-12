import { TestBed } from '@angular/core/testing';

import { SellerserviceService } from './sellerservice.service';

describe('SellerserviceService', () => {
  let service: SellerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
