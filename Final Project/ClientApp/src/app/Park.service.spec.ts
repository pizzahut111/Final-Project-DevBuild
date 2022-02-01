/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParkService } from './Park.service';

describe('Service: ParkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkService]
    });
  });

  it('should ...', inject([ParkService], (service: ParkServiceService) => {
    expect(service).toBeTruthy();
  }));
});
