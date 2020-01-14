import { TestBed } from '@angular/core/testing';

import { PopupservicesService } from './popupservices.service';

describe('PopupservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopupservicesService = TestBed.get(PopupservicesService);
    expect(service).toBeTruthy();
  });
});
