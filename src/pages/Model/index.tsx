import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCar } from '../../contexts/car';
import { api } from '../../services/api';
import * as S from './styles';

export function Model() {
  const { brand, model, setModel } = useCar();

  const [modelsOptions, setModelsOptions] = useState(['']);

  const getModels = useCallback(async () => {
    const response = await api.get(`/brands/${brand}/models`);

    const models: string[] = response.data;

    setModelsOptions(models);
  }, [brand]);

  const history = useHistory();

  const nextPage = () => {
    history.push(`/year`);
  };

  useEffect(() => {
    getModels();
  }, [getModels]);

  return (
    <S.Container>
      <p>Agora nos diga o modelo do seu carro</p>

      <S.Select>
        <select
          placeholder="Selecione o modelo do seu carro"
          onChange={(e) => {
            setModel(e.target.value);
            nextPage();
          }}
          defaultValue={model}
        >
          <option value="">Selecione o modelo</option>
          {modelsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </S.Select>
    </S.Container>
  );
}
