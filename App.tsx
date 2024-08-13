import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddGameScreen } from './screens/AddGameScreen';
import { HomeScreen } from './screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined
  AddGame: { onGoBack: () => void }
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink'
          },
        }}>
        <RootStack.Screen options={{ title: 'Jogos' }} name="Home" component={HomeScreen} />
        <RootStack.Screen options={{ title: 'Adicionar jogo' }} name="AddGame" component={AddGameScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


