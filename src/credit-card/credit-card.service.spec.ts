import { Test, TestingModule } from '@nestjs/testing';
import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditCardService],
    }).compile();

    service = module.get<CreditCardService>(CreditCardService);
  });

  describe('validate', () => {
    it('should return true for valid credit card numbers', () => {
      const validCardNumbers = [
        '0',
        '79927398713',
        '49927398716',
        '1234567812345670',
      ];
      validCardNumbers.forEach((cardNumber) => {
        expect(service.validate({ cardNumber })).toBe(true);
      });
    });
    it('should return true for invalid credit card numbers', () => {
      const invalidCardNumbers = [
        '1',
        '111111111',
        '49927398717',
        '1789372997',
        '1234567812345678',
        '1234567891234567',
      ];
      invalidCardNumbers.forEach((cardNumber) => {
        expect(service.validate({ cardNumber })).toBe(false);
      });
    });
  });
});
