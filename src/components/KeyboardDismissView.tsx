import React from "react";
import {
	Keyboard,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
});

const KeyboardDismissView = (props) => {
	if (props.withScrollView) {
		return (
			<ScrollView
				keyboardShouldPersistTaps="never"
				contentContainerStyle={styles.container}
			>
				{props.children}
			</ScrollView>
		);
	}

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={Keyboard.dismiss}
			style={styles.container}
		>
			{props.children}
		</TouchableOpacity>
	);
};

export default KeyboardDismissView;
