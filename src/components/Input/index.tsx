import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({
  name,
  icon: Icon,
  containerStyle,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <S.Container
      isErrored={!!error}
      style={containerStyle}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}

      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <S.Error title={error}>
          <FiAlertCircle color="var(--red)" size={20} />
        </S.Error>
      )}
    </S.Container>
  );
}
