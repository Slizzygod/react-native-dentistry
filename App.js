import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { HomeScreen, PatientScreen } from "./screens";

const AppNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { title: "Пациенты", headerTintColor: "#2A86FF" },
  },
  Patient: {
    screen: PatientScreen,
    navigationOptions: {
      title: "Карта пациента",
      headerTintColor: "#2A86FF",
    },
  },
});

export default createAppContainer(AppNavigation);
