import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface SelectProps {
  id: string;
  title: string;
  placeholder: string;
  onChange: (value: string) => void;
  nextPageUrl: string;
  defaultValue: string;
  options: string[];
}

export function Select({
  id,
  title,
  placeholder,
  onChange,
  nextPageUrl,
  defaultValue,
  options,
}: SelectProps) {
  const history = useHistory();

  const nextPage = () => {
    history.push(nextPageUrl);
  };

  const handleChangeSelect = (newValue: string) => {
    onChange(newValue);
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
          nextPage();
        }}
        value={defaultValue}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </S.Select>
  );
}
