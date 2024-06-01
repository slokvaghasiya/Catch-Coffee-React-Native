import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/Store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import EmptyListAnimation from '../components/EmptyListAnimation'
import PopupAnimatiom from '../components/PopupAnimatiom'
import OrderHistoryCard from '../components/OrderHistoryCard'

const OrderHistoryScreen = () => {

  const [showAnimation, setShowAnimation] = useState(false);
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList)
  console.log("History..",OrderHistoryList.length);
  
  const tabBarHeight = useBottomTabBarHeight();
  

  return (
    <View style={styles.ScreenContainer} >
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {
        showAnimation ? (
          <PopupAnimatiom style={styles.LottieAnimation} source={require('../lottie/successful.json')} />
        ) : (<></>)
      }
      <ScrollView  
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.ScrollViewFlex,{marginBottom:tabBarHeight}]}
      >
        <View style={styles.ItemContainer} >
        <HeaderBar title='Order History' />
        {
          OrderHistoryList.length == 0 ? (<EmptyListAnimation title={"No Order History"} />) :
          (
            <View style={styles.ListItemContainer} >
              {
                OrderHistoryList.map((data:any,index:any)=>(
                  <OrderHistoryCard 
                  key={index.toString()} 
                  navigationHandler={()=>{}}
                  CartList={data.CartList}
                  CartListPrice={data.CartListPrice}
                  orderDate={data.OrderDate} />
                ))
              }
            </View> )
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
  LottieAnimation: {
    height:250
  },
  ScrollViewFlex: {
    flexGrow: 1
  },
  ScrollViewInner: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer: {
    flex: 1
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20
  },
})

export default OrderHistoryScreen