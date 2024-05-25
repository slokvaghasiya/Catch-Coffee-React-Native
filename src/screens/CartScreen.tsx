import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/Store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import EmptyListAnimation from '../components/EmptyListAnimation'
import PaymentFooter from '../components/PaymentFooter'


const CartScreen = ({navigation,route}:any) => {

  const Cart = useStore((state: any) => state.Cart)
  const CartPrice = useStore((state: any) => state.CartPrice)
  const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity)
  const decrementCartItemQuantity = useStore((state: any) => state.decrementCartItemQuantity)
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)

  console.log("DATA...", Cart.length);

  const tabBatHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push("Payment")
  }

  return (
    <View style={styles.ScreenContainer} >
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={[styles.ScrollViewInner,{marginBottom:tabBatHeight}]} >
          <View style={styles.ItemContainer} >
          <HeaderBar title='Cart' />
          {
            Cart.length == 0 ? ( <EmptyListAnimation title={"Cart is Empty"} /> ) : 
            (
              <View style={styles.ListItemContainer} >
                {
                  Cart.map((data:any)=>(
                    <TouchableOpacity onPress={()=>{}} key={data.id} >

                    </TouchableOpacity>
                  ))
                }
              </View>
            )
          }
          </View>
          {
            Cart.length != 0 ? <PaymentFooter buttonTitle='Pay' price={{price:CartPrice,currency:"$"}}  buttonPressHandler={()=>{ buttonPressHandler() }}/> : <></>
          }
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1
  },
  ScrollViewInner: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer:{
    flex:1
  },
  ListItemContainer:{
    paddingHorizontal:SPACING.space_20,
    gap:SPACING.space_20
  },
})

export default CartScreen