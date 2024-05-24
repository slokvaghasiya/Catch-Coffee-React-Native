import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/Store'


const CartScreen = () => {

  const Cart = useStore((state: any) => state.Cart)
  console.log("DATA...",Cart.length);
  
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({})

export default CartScreen