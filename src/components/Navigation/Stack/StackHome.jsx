import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Home/Home'
import DetailProduct from '../../Home/DetailProduct';
import Shop from '../../Shop/Shop'
const Stack = createStackNavigator()

export default function StackHome() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailProduct" component={DetailProduct} options={{headerShown:false}}/>
        <Stack.Screen name='shopProduct' component={Shop} options={{ headerShown: false }}/>

    </Stack.Navigator>
  )
}