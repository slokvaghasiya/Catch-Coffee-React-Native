import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomeIcon from './CustomeIcon';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProp {
  id: string,
  index: number,
  type: string,
  rosted: string,
  imageLink_square: ImageProps,
  name: string,
  special_ingredient: string,
  avg_rating: number,
  price: any,
  buttonPressHandler: any,

}

const CoffeeCard: React.FC<CoffeeCardProp> = ({
  id, index, type, rosted, imageLink_square, name, special_ingredient, avg_rating, price, buttonPressHandler }) => {
  return (
    <View>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.CradLinearGradientContainer} colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} >
        <ImageBackground
          source={imageLink_square}
          style={styles.CardImageBG}
          resizeMode='cover'>
          <View style={styles.CardRatingContainer}  >
            <CustomeIcon 
            name={"star"} 
            color={COLORS.primaryOrangeHex} 
            size={FONTSIZE.size_16} 
            />
            <Text style={styles.CardRatingText} >{avg_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.CardTitle} > {name} </Text>
        <Text style={styles.CardSubTitle} > {special_ingredient} </Text>
        <View style={styles.CardFooterRow} >
          <Text style={styles.CardPriceCurrency} >$<Text style={styles.CardPrice} >{price.price}</Text></Text>
          <TouchableOpacity>
            <BGIcon name={"add"} color={COLORS.primaryWhiteHex} BGColor={COLORS.primaryOrangeHex} size={FONTSIZE.size_10} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
  CradLinearGradientContainer: {
    padding:SPACING.space_15,
    borderRadius:BORDERRADIUS.radius_25
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden'
  },
  CardRatingContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: "absolute",
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    lineHeight: 22
  },
  CardTitle:{
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  CardSubTitle:{
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  CardFooterRow: {
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:SPACING.space_15
  },
  CardPriceCurrency:{
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  CardPrice:{
    color: COLORS.primaryWhiteHex,
  }
})

export default CoffeeCard