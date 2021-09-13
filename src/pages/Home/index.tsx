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
import { Subtitle } from '../../components/Subtitle';
import { Loading } from '../../components/Loading';

export function Home() {
  const { brand, setBrand } = useCar();
  const [loading, setLoading] = useState(true);

  const [brandsOptions, setBrandsOptions] = useState(['']);

  const getBrands = useCallback(async () => {
    try {
      const response = await api.get(`/brands`);

      const brands: string[] = response.data;

      setBrandsOptions(brands);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  return (
    <Main>
      <Content>
        <Subtitle text="Olá, bem vindo!" />
        <S.Description>
          Descubra quanto vale seu carro <br />
          Saiba agora mesmo uma estimativa de preço pro seu carro e agende sua
          avaliação <span>gratuita</span>.
        </S.Description>
        <Title text="Conte sobre seu carro pra gente" />
        {loading ? (
          <Loading />
        ) : (
          <Select
            id="brand"
            title="Para iniciar, comece selecionando a marca do seu carro"
            placeholder="Selecione a marca seu carro"
            setState={setBrand}
            nextPageUrl="/model"
            defaultValue={brand}
            options={brandsOptions}
          />
        )}
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
