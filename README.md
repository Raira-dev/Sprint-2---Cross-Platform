# TerraSense

*Integrantes*

Ana Luiza rm: 563171

Gisleine Muñoz Rm: 563804

Larissa Machado Rm: 564168

Raira RM:564850

Sofia Franken Rm: 562767

## Sobre o Projeto

O TerraSense é um aplicativo mobile desenvolvido em React Native com Expo e TypeScript para auxiliar no monitoramento da vegetação em rodovias.

O objetivo do app é permitir o registro de ocorrências relacionadas à manutenção da vegetação, ajudando operadores e supervisores a identificar áreas que precisam de corte de grama e manutenção preventiva.

---

# Problema Resolvido

Vegetações altas próximas às rodovias podem causar:

* redução da visibilidade;
* risco de acidentes;
* dificuldade de monitoramento;
* aumento do risco operacional.

O aplicativo centraliza as ocorrências de forma simples e organizada.

---

# Usuários do Aplicativo

O app foi pensado para:

* Operadores de campo;
* Supervisores de manutenção;
* Equipes de monitoramento rodoviário.

---

# Funcionalidades do MVP

O aplicativo possui:

* Cadastro de ocorrências;
* Listagem de ocorrências;
* Tela de detalhes;
* Classificação de risco;
* Navegação entre telas;
* Atualização dinâmica da lista de ocorrências.

---

# Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* React Navigation
* Context API

---

# Estrutura do Projeto

```txt
src/
 ├── components/
 ├── context/
 ├── navigation/
 ├── screens/
 ├── styles/
 └── types/
```

---

# ▶️ Como Rodar o Projeto

## 1. Instalar dependências

```bash
npm install
```

---

## 2. Instalar navegação

```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
```

---

## 3. Instalar dependências do Expo

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-web react-dom @expo/metro-runtime
```

---

## 4. Rodar o projeto

### Web

```bash
npx expo start --web
```

### Mobile

```bash
npx expo start
```

---

# Como os Dados Estão Mockados

Os dados do aplicativo estão mockados utilizando Context API e arrays locais.

As ocorrências são armazenadas temporariamente em memória através do:

```txt
src/context/OcorrenciasContext.tsx
```

Atualmente não existe integração com banco de dados real.

As informações cadastradas ficam disponíveis apenas durante a execução do aplicativo.

Exemplo de dado mockado:

```ts
{
  id: 1,
  titulo: "Vegetação alta",
  descricao: "Vegetação acima do limite permitido",
  local: "KM 70",
  risco: "alto",
  data: "12/06/2026",
}
```

---

# Funcionalidades Futuras

* Integração com banco de dados;
* Upload de fotos;
* Geolocalização;
* Integração com sensores;
* Dashboard analítico;
* Sistema de login.

