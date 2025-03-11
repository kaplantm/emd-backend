import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { ValidateCreditCardDto } from './dto/validate-credit-card.dto';

@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Post('validate')
  @HttpCode(200)
  create(@Body() validateCreditCardDto: ValidateCreditCardDto) {
    const isValid = this.creditCardService.validate(validateCreditCardDto);
    return { isValid };
  }
}
