import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/Store'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from '../theme/theme';
import PaymentFooter from '../components/PaymentFooter';
import { ScrollView } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import CartItem from '../components/CartItem';
import FavoritesItemCard from '../components/FavoritesItemCard';


const FavoriteScreen = ({ navigation }: any) => {

  const FavorittestList = useStore((state: any) => state.FavouriteList)
  const addTofavouriteList = useStore((state: any) => state.addTofavouriteList);
  const deleteFromfavouriteList = useStore((state: any) => state.deleteFromfavouriteList);
  const tabBarHeight = useBottomTabBarHeight();

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromfavouriteList(type, id) : addTofavouriteList(type, id)
  }

  return (
    <View style={styles.ScreenContainer} >
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={[styles.ScrollViewInner, { marginBottom: tabBarHeight }]} >
          <View style={styles.ItemContainer} >
            <HeaderBar title='Favorites' />
            {
              FavorittestList.length == 0 ? (<EmptyListAnimation title={"No Favorites"} />) :
                (
                  <View style={styles.ListItemContainer} >
                    {
                      FavorittestList.map((data: any) => (
                        <TouchableOpacity onPress={() => {
                          navigation.push("Details", { index: data.index, id: data.id, type: data.type })
                        }} key={data.id} >
                          <FavoritesItemCard
                            id={data.id}
                            name={data.name}
                            type={data.type}
                            avg_rating={data.avg_rating}
                            imagelink_portrait={data.imagelink_portrait}
                            special_ingredient={data.special_ingredient}
                            ingredients={data.ingredients}
                            ratings_count={data.ratings_count}
                            roasted={data.roasted}
                            description={data.description}
                            favourite={data.favourite}
                            ToggleFavouriteItem ={ToggleFavourite} 
                          />
                        </TouchableOpacity>
                      ))
                    }
                  </View>
                )
            }
          </View>
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
  ItemContainer: {
    flex: 1
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20
  },
})

export default FavoriteScreen