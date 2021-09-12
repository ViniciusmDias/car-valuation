import { useCallback, useEffect } from 'react';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import * as S from './styles';

export function Car() {
  const { brand, model, year, versionId, car, setCar } = useCar();

  const getCar = useCallback(async () => {
    const response = await api.get(
      `/brands/${brand}/models/${model}/years/${year}/versions/${versionId}`,
    );

    const newCar: Car = response.data;

    setCar(newCar);
  }, [brand, model, year, versionId, setCar]);

  useEffect(() => {
    getCar();
  }, [getCar]);

  return (
    <S.Container>
      <p>{car.precoMedio}</p>
    </S.Container>
  );
}
