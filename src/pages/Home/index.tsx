import { useCallback, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import { Select } from '../../components/Select';
import * as S from './styles';
import { ChangePageButton } from '../../components/ChangePageButton';
import { Title } from '../../components/Title';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';
import { Content } from '../../components/Content';

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
    <Main>
      <Content>
        <S.Subtitle>Olá, boa tarde!</S.Subtitle>
        <S.Description>
          Bem vindo ao novo sistema da <span> Creditas </span>onde buscamos
          responder a seguinte pergunta:
        </S.Description>
        <Title text="Quanto vale o meu carro?" />
        <Select
          id="brand"
          title="Para iniciar, comece selecionando a marca do seu carro"
          placeholder="Selecione a marca seu carro"
          onChange={setBrand}
          nextPageUrl="/model"
          defaultValue={brand}
          options={brandsOptions}
        />
      </Content>

      <Footer>
        {brand && (
          <ChangePageButton
            url="/model"
            iconRight={FaArrowRight}
            text="Selecionar o modelo"
          />
        )}
      </Footer>
    </Main>
  );
}
