import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import * as S from './styles';

export function Welcome() {
  const { brand, setBrand } = useCar();

  const [brandsOptions, setBrandsOptions] = useState(['']);

  const getBrands = useCallback(async () => {
    const response = await api.get(`/brands`);

    const brands: string[] = response.data;

    setBrandsOptions(brands);
  }, []);

  const history = useHistory();

  const nextPage = () => {
    history.push('/model');
  };

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  return (
    <S.Container>
      <h3>Olá, boa noite!</h3>
      <p>
        Bem vindo ao novo sistema da Creditas onde respondemos a seguinte
        pergunta:
      </p>
      <h1>
        Quanto vale <br />o meu carro?
      </h1>
      <p>Para iniciar, comece selecionando a marca do seu carro</p>

      <S.Select>
        <select
          placeholder="Selecione a marca do seu carro"
          onChange={(e) => {
            setBrand(e.target.value);
            nextPage();
          }}
          defaultValue={brand}
        >
          <option value="">Selecione a marca</option>
          {brandsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </S.Select>
    </S.Container>
  );
}
