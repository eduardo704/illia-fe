import { TestBed } from '@angular/core/testing';

import { BaseHttpService } from './base-http.service';
import { HttpClientModule } from '@angular/common/http';

describe('BaseHttpService', () => {
  let service: BaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
