import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/Store'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import ImageBGInfo from '../components/ImageBGInfo';

const DetialsScreen = ({ navigation, route }: any) => {

  const ItemOfIndex = useStore((state: any) =>
    route.params.type == "Coffee" ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  const [fullDesc, setFullDesc] = useState(false)
  const [price, setPrice] = useState(ItemOfIndex.prices[0])

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
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          avg_rating={ItemOfIndex.average_rating}
          rating_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />
        <View style={styles.FooterInfoArea} >
          <Text style={styles.InfoTitle} >Description</Text>
          {
            fullDesc ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  setFullDesc(prev => !prev)
                }} >
                <Text style={styles.descriptionText} >{ItemOfIndex.description}</Text>
              </TouchableWithoutFeedback>) :
              (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setFullDesc(prev => !prev)
                  }} >
                  <Text style={styles.descriptionText} numberOfLines={3} >
                    {ItemOfIndex.description}
                  </Text>
                </TouchableWithoutFeedback>
              )
          }
          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.SizeOuterContainer} >
            {
              ItemOfIndex.prices.map((data: any) => {
                <TouchableOpacity key={data.size} style={[styles.SizeBox]} >

                  <Text style={[styles.SizeText, {
                    fontSize: ItemOfIndex.type == "bean" ? FONTSIZE.size_14 : FONTSIZE.size_16,
                  }]} >
                    {data.size}
                  </Text>

                </TouchableOpacity>
              })
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
  FooterInfoArea: {
    padding: SPACING.space_20,

  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10
  },
  descriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
    letterSpacing: 0.5
  },
  SizeOuterContainer: {},
  SizeBox: {},
  SizeText: {},
})

export default DetialsScreen