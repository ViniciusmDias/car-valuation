import { convertNumberToBRL } from './convertNumberToBRL';

describe('Convert number to money', () => {
  it('When receive a number convert it to a number', () => {
    const number = 123;

    const money = convertNumberToBRL(number);

    expect(money).toEqual('R$123.00');
  });
});
