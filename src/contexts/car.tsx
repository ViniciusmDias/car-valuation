import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type CarContextData = {
  car: Car;
  setCar: Dispatch<SetStateAction<Car>>;
  brand: string;
  setBrand: Dispatch<SetStateAction<string>>;
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  versionId: string;
  setVersionId: Dispatch<SetStateAction<string>>;
};

export const CarContext = createContext({} as CarContextData);

type CarContextProviderProps = {
  children: ReactNode;
};

export const CarProvider: React.FC<CarContextProviderProps> = ({
  children,
}: CarContextProviderProps) => {
  const [car, setCar] = useState({} as Car);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [versionId, setVersionId] = useState('');

  return (
    <CarContext.Provider
      value={{
        car,
        setCar,
        brand,
        setBrand,
        model,
        setModel,
        year,
        setYear,
        versionId,
        setVersionId,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCar = (): CarContextData => {
  return useContext(CarContext);
};
