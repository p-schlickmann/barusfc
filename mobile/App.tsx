import { createStackNavigator } from "@react-navigation/stack";
import Home, { barI } from "./screens/Home";
import BarDetail from "./screens/BarDetail";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
    Inicio: undefined;
    Detalhes: { bar: barI };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Inicio"}>
                <Stack.Screen name="Inicio" component={Home} />
                <Stack.Screen name="Detalhes" component={BarDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
