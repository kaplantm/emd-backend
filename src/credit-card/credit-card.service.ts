import { Injectable } from '@nestjs/common';
import { ValidateCreditCardDto } from './dto/validate-credit-card.dto';

@Injectable()
export class CreditCardService {
  // Validate uses the Luhn checksum algorithm for validation
  // 1. Starting from the rightmost digit, double the value of every second digit.
  // 2. If doubling of a number results in a two digit number i.e greater than 9(e.g., 6 × 2 = 12), then add the digits of the product, to get a single digit number.
  // 3. Now take the sum of all the digits.
  // 4. If the total modulo 10 is equal to 0, then the number is valid according to the Luhn formula; otherwise it is not valid.
  validate(validateCreditCardDto: ValidateCreditCardDto): boolean {
    const { cardNumber } = validateCreditCardDto;
    const cardNumberArray = cardNumber.split('').map(Number);
    const cardNumberLength = cardNumberArray.length;

    let sum = 0;
    let shouldBeDoubled = false;
    for (let i = cardNumberLength - 1; i >= 0; i -= 1) {
      let addend = cardNumberArray[i];

      if (shouldBeDoubled) {
        // double the value of every second digit
        addend = addend * 2;
        // If doubling of a number results in a two digit number, then add the digits of the result
        if (addend > 9) {
          const doubleArray = addend.toString().split('').map(Number);
          addend = doubleArray[0] + doubleArray[1];
        }
      }
      // sum of all the digits
      sum += addend;
      shouldBeDoubled = !shouldBeDoubled;
    }

    return sum % 10 === 0;
  }
}
