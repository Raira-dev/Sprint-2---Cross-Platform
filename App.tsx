import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./src/navigation/AppNavigator";

import {
  OcorrenciasProvider,
} from "./src/context/OcorrenciasContext";

export default function App() {
  return (
    <OcorrenciasProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </OcorrenciasProvider>
  );
}