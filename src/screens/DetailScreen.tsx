import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../styles/colors";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Detalhes da Ocorrência
      </Text>

      <Text style={styles.text}>
        Local: KM 67
      </Text>

      <Text style={styles.text}>
        Risco: Alto
      </Text>

      <Text style={styles.text}>
        Status: Crítico
      </Text>
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

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});