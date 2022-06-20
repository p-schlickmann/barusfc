import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import BarDetail from "./screens/BarDetail";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    BarDetail: {barId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'Home'}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="BarDetail" component={BarDetail} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}

