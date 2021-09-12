import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import * as S from './styles';

export function Year() {
  const { brand, model, year, setYear } = useCar();

  const [yearsOptions, setYearsOptions] = useState(['']);

  const getYears = useCallback(async () => {
    const response = await api.get(`/brands/${brand}/models/${model}/years`);

    const years: string[] = response.data;

    setYearsOptions(years);
  }, [brand, model]);

  const history = useHistory();

  const nextPage = () => {
    history.push(`/version`);
  };

  useEffect(() => {
    getYears();
  }, [getYears]);

  return (
    <S.Container>
      <p>De que que ano ele é?</p>

      <S.Select>
        <select
          placeholder="Selecione o ano do seu carro"
          onChange={(e) => {
            setYear(e.target.value);
            nextPage();
          }}
          defaultValue={year}
        >
          <option value="">Selecione o ano</option>
          {yearsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </S.Select>
    </S.Container>
  );
}
