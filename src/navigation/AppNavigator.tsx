import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import ListaScreen from "../screens/ListaScreen";
import CadastroScreen from "../screens/CadastroScreen";
import DetailScreen from "../screens/DetailScreen";

const Tab =
  createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Lista"
        component={ListaScreen}
      />

      <Tab.Screen
        name="Cadastro"
        component={CadastroScreen}
      />

      <Tab.Screen
        name="Detalhe"
        component={DetailScreen}
      />
    </Tab.Navigator>
  );
}