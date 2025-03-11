import { Test, TestingModule } from '@nestjs/testing';
import { CreditCardController } from './credit-card.controller';
import { CreditCardService } from './credit-card.service';

describe('CreditCardController', () => {
  let controller: CreditCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditCardController],
      providers: [CreditCardService],
    }).compile();

    controller = module.get<CreditCardController>(CreditCardController);
  });

  describe('validate', () => {
    it('should return an object with correct isValid and message properties for valid cards', () => {
      const validateCreditCardDto = { cardNumber: '79927398713' };
      const result = controller.create(validateCreditCardDto);

      expect(result.isValid).toBeTruthy();
    });
    it('should return an object with correct isValid and message properties for invalid cards', () => {
      const validateCreditCardDto = { cardNumber: '49927398717' };
      const result = controller.create(validateCreditCardDto);

      expect(result).toHaveProperty('isValid');
      expect(result.isValid).toBeFalsy();
    });
  });
});
