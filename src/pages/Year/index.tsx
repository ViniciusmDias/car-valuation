import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { ChangePageButton } from '../../components/ChangePageButton';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { Main } from '../../components/Main';
import { Select } from '../../components/Select';
import { Title } from '../../components/Title';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';

export function Year() {
  const { brand, model, year, setYear } = useCar();
  const [yearsOptions, setYearsOptions] = useState(['']);
  const [loading, setLoading] = useState(true);

  const getYears = useCallback(async () => {
    try {
      const response = await api.get(`/brands/${brand}/models/${model}/years`);

      const years: string[] = response.data;

      setYearsOptions(years);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [brand, model]);

  useEffect(() => {
    getYears();
  }, [getYears]);

  return !brand ? (
    <Redirect to="/" />
  ) : (
    <Main>
      <Content>
        <Title text={`Seu carro é da marca ${brand}, no modelo ${model}.`} />
        {loading ? (
          <Loading />
        ) : (
          <Select
            id="year"
            title="De qual ano é o seu possante?"
            placeholder="Selecione o ano do seu carro"
            setState={setYear}
            nextPageUrl="/version"
            defaultValue={year}
            options={yearsOptions}
          />
        )}
      </Content>
      <Footer>
        <ChangePageButton url="/model" iconLeft={FaArrowLeft} text="Voltar" />
        {brand && model && year && (
          <ChangePageButton
            url="/version"
            iconRight={FaArrowRight}
            text="Selecionar a versão"
          />
        )}
      </Footer>
    </Main>
  );
}
