import { IsString, Length, Matches } from 'class-validator';

export class ValidateCreditCardDto {
  @IsString()
  @Length(8, 19, {
    message:
      'Invalid: Credit card number must be between 8 and 19 numerical characters',
  })
  @Matches(/^\d+$/, {
    message:
      'Invalid: Credit card number must contain only numerical characters',
  })
  // TODO: add transformation to remove spaces
  cardNumber: string;
}
