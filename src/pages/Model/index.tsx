import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { Main } from '../../components/Main';
import { ChangePageButton } from '../../components/ChangePageButton';
import { Select } from '../../components/Select';
import { Title } from '../../components/Title';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';

export function Model() {
  const { brand, model, setModel } = useCar();
  const [loading, setLoading] = useState(true);

  const [modelsOptions, setModelsOptions] = useState(['']);

  const getModels = useCallback(async () => {
    const response = await api.get(`/brands/${brand}/models`);

    const models: string[] = response.data;

    setModelsOptions(models);
    setLoading(false);
  }, [brand]);

  useEffect(() => {
    getModels();
  }, [getModels]);

  return !brand ? (
    <Redirect to="/" />
  ) : (
    <Main>
      <Content>
        <Title text={`Seu carro é da marca ${brand}.`} />
        {loading ? (
          <Loading />
        ) : (
          <Select
            id="model"
            title="Para prosseguir, precisamos saber o modelo do seu carro"
            placeholder="Selecione o modelo do seu carro"
            onChange={setModel}
            nextPageUrl="/year"
            defaultValue={model}
            options={modelsOptions}
          />
        )}
      </Content>
      <Footer>
        <ChangePageButton url="" iconLeft={FaArrowLeft} text="Voltar" />
        {brand && model && (
          <ChangePageButton
            url="/year"
            iconRight={FaArrowRight}
            text="Selecionar o ano"
          />
        )}
      </Footer>
    </Main>
  );
}
