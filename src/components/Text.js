import React from "react";
import { Text } from "react-native";

export const Light = (props) => {
  return <Text {...props} style={[{ fontFamily: 'Light' }, props.style]} />;
};

export const Regular = (props) => {
  return <Text {...props} style={[{ fontFamily: 'Regular' }, props.style]} />;
};

export const Medium = (props) => {
  return <Text {...props} style={[{ fontFamily: 'Medium' }, props.style]} />;
};

export const SemiBold = (props) => {
  return <Text {...props} style={[{ fontFamily: 'SemiBold' }, props.style]} />;
};

export const Bold = (props) => {
  return <Text {...props} style={[{ fontFamily: 'Bold' }, props.style]} />;
};

export const Header = (props) => {
  return <Bold {...props} style={[{ fontSize: 32 }, props.style]} />;
};

export const Main = (props) => {
  return <Regular {...props} style={[{ fontSize: 20, color: "rgb(22, 23, 27)" }, props.style]} />;
};

export const Sub = (props) => {
  return <Regular {...props} style={[{ fontSize: 16, color: "rgba(23, 22, 27, 0.5)" }, props.style]} />;
};

