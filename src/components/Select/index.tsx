import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface SelectProps {
  id: string;
  title: string;
  placeholder: string;
  setState: (value: string) => void;
  nextPageUrl: string;
  defaultValue: string;
  options?: string[];
  versionOptions?: Version[];
}

export function Select({
  id = 'label',
  title = 'Selecione algo no input',
  placeholder = 'Selecione uma opção',
  setState,
  nextPageUrl = '/',
  defaultValue = 'default',
  options,
  versionOptions,
}: SelectProps) {
  const history = useHistory();

  const nextPage = () => {
    history.push(nextPageUrl);
  };

  const handleChangeSelect = (newValue: string) => {
    setState(newValue);
    nextPage();
  };

  return (
    <S.Select htmlFor={id}>
      <p>{title}</p>
      <select
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          handleChangeSelect(e.target.value);
        }}
        value={defaultValue}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {versionOptions
          ? versionOptions.map((option) => (
              <option key={option.versionId} value={option.versionId}>
                {option.version}
              </option>
            ))
          : options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
      </select>
    </S.Select>
  );
}
