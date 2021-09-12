import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import * as S from './styles';

export function Version() {
  const { brand, model, year, versionId, setVersionId } = useCar();

  const [versionsOptions, setVersionsOptions] = useState([{} as Version]);

  const getVersions = useCallback(async () => {
    const response = await api.get(
      `/brands/${brand}/models/${model}/years/${year}/versions`,
    );

    const versions: Version[] = response.data;

    setVersionsOptions(versions);
  }, [brand, model, year]);

  const history = useHistory();

  const nextPage = () => {
    history.push(`/car`);
  };

  useEffect(() => {
    getVersions();
  }, [getVersions]);

  return (
    <S.Container>
      <p>Por gentileza, poderia nos informar a versão do carro?</p>

      <S.Select>
        <select
          placeholder="Selecione a versão do seu carro"
          onChange={(e) => {
            setVersionId(e.target.value);
            nextPage();
          }}
          defaultValue={versionId}
        >
          <option value="">Selecione a versão</option>
          {versionsOptions.map((option) => (
            <option key={option.versionId} value={option.versionId}>
              {option.version}
            </option>
          ))}
        </select>
      </S.Select>
    </S.Container>
  );
}
