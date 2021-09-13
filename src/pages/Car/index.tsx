import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { ChangePageButton } from '../../components/ChangePageButton';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { Main } from '../../components/Main';
import { Subtitle } from '../../components/Subtitle';
import { Title } from '../../components/Title';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import { convertNumberToBRL } from '../../utils/convertNumberToBRL';
import * as S from './styles';

export function Car() {
  const {
    brand,
    setBrand,
    model,
    setModel,
    year,
    setYear,
    versionId,
    setVersionId,
    car,
    setCar,
  } = useCar();
  const [loading, setLoading] = useState(true);

  const getCar = useCallback(async () => {
    try {
      const response = await api.get(
        `/brands/${brand}/models/${model}/years/${year}/versions/${versionId}`,
      );
      const newCar: Car = response.data;
      setCar(newCar);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [brand, model, year, versionId, setCar]);

  const cleanData = () => {
    setBrand('');
    setModel('');
    setYear('');
    setVersionId('');
    setCar({} as Car);
  };

  useEffect(() => {
    getCar();
  }, [getCar]);

  return !brand ? (
    <Redirect to="/" />
  ) : (
    <Main>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <Subtitle text="Obrigado por usar nossa aplicação!" />
          <S.Text>O valor em média do seu carro é:</S.Text>
          <Title
            style={{ color: 'var(--green)' }}
            text={convertNumberToBRL(+car.precoMedio)}
          />
          <S.Text>
            Trouxemos abaixo mais algumas informações sobre o seu automóvel.
          </S.Text>
          {car.brand && (
            <h3>
              Marca: <span>{car.brand}</span>
            </h3>
          )}
          {car.model && (
            <h3>
              Modelo: <span>{car.model}</span>
            </h3>
          )}
          {car.modelYear && (
            <h3>
              Year: <span>{car.modelYear}</span>
            </h3>
          )}
          {car.version && (
            <h3>
              Versão: <span>{car.version}</span>
            </h3>
          )}
          {car.precoFipe && (
            <h3>
              Preço Fipe: <span>{convertNumberToBRL(+car.precoFipe)}</span>
            </h3>
          )}
          {car.kmMedio && (
            <h3>
              Média Kilometragem: <span>{car.kmMedio}km</span>
            </h3>
          )}
        </Content>
      )}
      <Footer>
        <S.CleanButton type="button" onClick={() => cleanData()}>
          <ChangePageButton
            url="/"
            iconLeft={FaArrowLeft}
            text="Pesquisar outro carro"
          />
        </S.CleanButton>
        <S.LinkExternal
          href="https://auto.creditas.com/vender-carro"
          title="Avaliação"
        >
          Avaliação
          <FaArrowRight style={{ marginLeft: '0.5rem' }} />
        </S.LinkExternal>
      </Footer>
    </Main>
  );
}
