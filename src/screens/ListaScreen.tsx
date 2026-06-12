import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

import { useContext } from "react";

import OcorrenciaCard from "../components/OcorrenciaCard";

import { colors } from "../styles/colors";

import {
  OcorrenciasContext,
} from "../context/OcorrenciasContext";

export default function ListaScreen() {
  const { ocorrencias } =
    useContext(OcorrenciasContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ocorrências
      </Text>

      <FlatList
        data={ocorrencias}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <OcorrenciaCard ocorrencia={item} />
        )}
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
});