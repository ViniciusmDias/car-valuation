import { useCallback, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import { Select } from '../../components/Select';
import * as S from './styles';
import { NextPageButton } from '../../components/NextPageButton';

export function Home() {
  const { brand, setBrand } = useCar();

  const [brandsOptions, setBrandsOptions] = useState(['']);

  const getBrands = useCallback(async () => {
    const response = await api.get(`/brands`);

    const brands: string[] = response.data;

    setBrandsOptions(brands);
  }, []);

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  return (
    <S.Container>
      <S.Subtitle>Olá, boa tarde!</S.Subtitle>
      <S.Description>
        Bem vindo ao novo sistema da <span> Creditas </span>onde buscamos
        responder a seguinte pergunta:
      </S.Description>
      <S.Title>Quanto vale o meu carro?</S.Title>
      <Select
        id="brand"
        title="Para iniciar, comece selecionando a marca do seu carro"
        placeholder="Selecione a marca seu carro"
        onChange={setBrand}
        nextPageUrl="model"
        defaultValue={brand}
        options={brandsOptions}
      />
      {brand && (
        <NextPageButton
          url="model"
          icon={FaArrowRight}
          text="Escolher o modelo"
        />
      )}
    </S.Container>
  );
}
