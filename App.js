import { View,StyleSheet,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(){
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

function SettingsScreen(){
  return(
    <View>
      <Text>Settings Screen</Text>
    </View>
  )
}

function NewScreen(){
  return(
    <View>
      <Text>New Screen</Text>
    </View>
  )
}

const Tab= createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'New') {
              iconName = focused ? 'car' : 'car-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="New" component={NewScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}