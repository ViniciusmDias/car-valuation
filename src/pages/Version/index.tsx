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

export function Version() {
  const { brand, model, year, versionId, setVersionId } = useCar();
  const [versionsOptions, setVersionsOptions] = useState([{} as Version]);
  const [loading, setLoading] = useState(true);

  const getVersions = useCallback(async () => {
    const response = await api.get(
      `/brands/${brand}/models/${model}/years/${year}/versions`,
    );

    const versions: Version[] = response.data;

    setVersionsOptions(versions);
    setLoading(false);
  }, [brand, model, year]);

  useEffect(() => {
    getVersions();
  }, [getVersions]);

  return !brand ? (
    <Redirect to="/" />
  ) : (
    <Main>
      <Content>
        <Title
          text={`Seu carro é da marca ${brand}, no modelo ${model} e do ano ${year}.`}
        />
        {loading ? (
          <Loading />
        ) : (
          <Select
            id="version"
            title="Para finalizar, nos diga a versão do seu automóvel?"
            placeholder="Selecione a versão do carro"
            onChange={setVersionId}
            nextPageUrl="/car"
            defaultValue={versionId}
            versionOptions={versionsOptions}
          />
        )}
      </Content>
      <Footer>
        <ChangePageButton url="/year" iconLeft={FaArrowLeft} text="Voltar" />
        {brand && model && year && versionId && (
          <ChangePageButton
            url="/car"
            iconRight={FaArrowRight}
            text="Descobrir o valor"
          />
        )}
      </Footer>
    </Main>
  );
}
