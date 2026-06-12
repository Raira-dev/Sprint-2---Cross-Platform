import {
  createContext,
  useState,
} from "react";

const dadosIniciais = [
  {
    id: 1,
    titulo: "Vegetação alta",
    descricao:
      "Vegetação acima do limite permitido",
    local: "KM 70",
    risco: "alto",
    data: "12/06/2026",
  },
];

export const OcorrenciasContext =
  createContext<any>(null);

export function OcorrenciasProvider({
  children,
}: any) {
  const [ocorrencias, setOcorrencias] =
    useState(dadosIniciais);

  const adicionarOcorrencia = (
    titulo: string,
    descricao: string,
    local: string,
    risco: string
  ) => {
    const nova = {
      id: Date.now(),
      titulo,
      descricao,
      local,
      risco,
      data: new Date().toLocaleDateString(),
    };

    setOcorrencias([
      ...ocorrencias,
      nova,
    ]);
  };

  return (
    <OcorrenciasContext.Provider
      value={{
        ocorrencias,
        adicionarOcorrencia,
      }}
    >
      {children}
    </OcorrenciasContext.Provider>
  );
}
