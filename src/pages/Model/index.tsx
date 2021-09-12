import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Main } from '../../components/Main';
import { ChangePageButton } from '../../components/ChangePageButton';
import { Select } from '../../components/Select';
import { Title } from '../../components/Title';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

export function Model() {
  const { brand, model, setModel } = useCar();

  const [modelsOptions, setModelsOptions] = useState(['']);

  const getModels = useCallback(async () => {
    const response = await api.get(`/brands/${brand}/models`);

    const models: string[] = response.data;

    setModelsOptions(models);
  }, [brand]);

  useEffect(() => {
    getModels();
  }, [getModels]);

  return (
    <Main>
      <Content>
        <Title text={`Você escolheu o carro da marca ${brand}`} />
        <Select
          id="brand"
          title="Para prosseguir, precisamos saber o modelo do seu carro"
          placeholder="Selecione o modelo do seu carro"
          onChange={setModel}
          nextPageUrl="year"
          defaultValue={model}
          options={modelsOptions}
        />
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
