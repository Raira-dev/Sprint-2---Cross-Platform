import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../styles/colors";

export default function OcorrenciaCard({
  ocorrencia,
}: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {ocorrencia.titulo}
      </Text>

      <Text style={styles.description}>
        {ocorrencia.descricao}
      </Text>

      <Text>
        📍 {ocorrencia.local}
      </Text>

      <Text>
        ⚠️ Risco: {ocorrencia.risco}
      </Text>

      <Text>
        📅 {ocorrencia.data}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    marginBottom: 10,
  },
});