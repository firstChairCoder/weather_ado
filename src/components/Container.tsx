import React from "react";
import { View } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

const Container = ({ children }) => {
	const insets = useSafeAreaInsets();
	return (
		<SafeAreaView style={{ flex: 1, paddingBottom: insets.bottom + 10 }}>
			<View
				style={{
					flex: 1,
					backgroundColor: "linen",
					paddingHorizontal: 20,
				}}
			>
				{children}
			</View>
		</SafeAreaView>
	);
};

export default Container;
