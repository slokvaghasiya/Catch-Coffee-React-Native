import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/Store'
import { COLORS } from '../theme/theme';
import ImageBGInfo from '../components/ImageBGInfo';

const DetialsScreen = ({ navigation, route }: any) => {

  const ItemOfIndex = useStore((state: any) =>
    route.params.type == "Coffee" ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  const addTofavouriteList = useStore((state: any) => state.addTofavouriteList);
  const deleteFromfavouriteList = useStore((state: any) => state.deleteFromfavouriteList);

  const BackHandler = () => {
    navigation.pop()
  }

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
        <ImageBGInfo
          EnableBackHanle={true}
          imageLink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingreidient}
          ingredients={ItemOfIndex.ingreidients}
          avg_rating={ItemOfIndex.avg_rating}
          rating_count={ItemOfIndex.rating_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />
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
  }
})

export default DetialsScreen