import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Homescreen";
import DetailsScreen from "./screens/DetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen}
        options={{title: 'Tela Principal',headerStyle:{backgroundColor:'#007bff'},
      headerTintColor:'#fff'}}
        />
        <Stack.Screen name="Details" 
        component={DetailsScreen}
        options={{title: 'Detalhes',headerStyle:{backgroundColor:'#dc3545'},
      headerTintColor:'#fff'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}