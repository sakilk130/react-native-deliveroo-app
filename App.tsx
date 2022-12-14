import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import { store } from './app/store';
import CartScreen from './screens/cart';
import DeliveryScreen from './screens/delivery';
import HomeScreen from './screens/home';
import PrepareOrderScreen from './screens/prepare-order';
import RestaurantScreen from './screens/restaurant';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                presentation: 'modal',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PrepareOrder"
              component={PrepareOrderScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
