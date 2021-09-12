const convertNumberToBRL = (number: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const money = formatter.format(number);

  return money;
};

export { convertNumberToBRL };
