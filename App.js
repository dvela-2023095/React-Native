import { View,StyleSheet,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import MainStackNavigator from "./navigation/MainNavigator";


export default function App(){
  return(
    <MainStackNavigator/>
  )
}