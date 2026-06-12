import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
} from "react-native";

import {
  useState,
  useContext,
} from "react";

import { colors } from "../styles/colors";

import {
  OcorrenciasContext,
} from "../context/OcorrenciasContext";

export default function CadastroScreen() {
  const [titulo, setTitulo] =
    useState("");

  const [descricao, setDescricao] =
    useState("");

  const [local, setLocal] =
    useState("");

  const [risco, setRisco] =
    useState("");

  const {
    adicionarOcorrencia,
  } = useContext(OcorrenciasContext);

  const salvarOcorrencia = () => {
    if (
      !titulo ||
      !descricao ||
      !local ||
      !risco
    ) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos"
      );

      return;
    }

    adicionarOcorrencia(
      titulo,
      descricao,
      local,
      risco
    );

    Alert.alert(
      "Sucesso",
      "Ocorrência cadastrada!"
    );

    setTitulo("");
    setDescricao("");
    setLocal("");
    setRisco("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nova Ocorrência
      </Text>

      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />

      <TextInput
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
        style={styles.input}
      />

      <TextInput
        placeholder="Risco (baixo, medio, alto)"
        value={risco}
        onChangeText={setRisco}
        style={styles.input}
      />

      <Button
        title="Salvar"
        onPress={salvarOcorrencia}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
});
