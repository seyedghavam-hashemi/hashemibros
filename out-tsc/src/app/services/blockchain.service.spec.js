import { TestBed } from '@angular/core/testing';
import { BlockchainService } from './blockchain.service';
describe('BlockchainService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BlockchainService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=blockchain.service.spec.js.map