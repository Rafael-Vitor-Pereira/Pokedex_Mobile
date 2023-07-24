import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
	return (
		<View style={styles.header}>
			<Image source={require('../../assets/logo.png')} style={styles.img} />
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#CCC',
		width: 400,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},
	img: {
		width: 350,
		height: 50,
		margin: 20
	}
})