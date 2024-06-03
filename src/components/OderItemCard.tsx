import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

interface OderItemCardProps {
    type: String,
    name: String,
    imagelink_square: ImageProps,
    special_ingredient: string,
    prices: any,
    itemPrice: string,
}

const OderItemCard: React.FC<OderItemCardProps> = ({
    type,
    name,
    imagelink_square,
    special_ingredient,
    prices,
    itemPrice,
}) => {


    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.CardLinearGradient}
        >
            <View style={styles.CardInfoContainer} >
                <View style={styles.CardImageInfoContainer} >
                    <Image style={styles.CardImage} source={imagelink_square} />
                    <View  >
                        <Text style={styles.CardTitle} >{name}</Text>
                        <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.CardCurrency} >$ <Text style={styles.CardPrice} >{itemPrice}</Text></Text>
                </View>
            </View>
            {
                prices.map((data: any, index: any) => (
                    <View key={index.toString()} style={styles.CardTableRow} >
                        <View style={styles.CardTableRow} >
                            <View style={styles.SizeBoxLeft} >
                                <Text style={[styles.SizeText, { fontSize: type == "Bean" ? FONTSIZE.size_12 : FONTSIZE.size_16 }]} >{data.size}</Text>
                            </View>
                            <View style={styles.PriceBoxRight} >
                                <Text style={styles.priceCurrency} >{data.currency}<Text style={styles.price} >{data.price}</Text></Text>
                            </View>
                            <View style={styles.CardTableRow} >
                                <Text style={styles.CardQuantityPriceText} >X <Text style={styles.price} >{data.quantity}</Text></Text>
                            </View>
                            <View style={styles.CardTableRow} >
                                <Text style={styles.CardQuantityPriceText} >$ {(data.quantity * data.price).toFixed(2).toString()}</Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    CardLinearGradient: {
        gap: SPACING.space_20,
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25
    },
    CardInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    CardImageInfoContainer: {
        flexDirection: "row",
        gap: SPACING.space_20,
        alignItems: "center"
    },
    CardImage: {
        height: 90,
        width: 90,
        borderRadius: BORDERRADIUS.radius_15
    },
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    CardSubTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.secondaryLightGreyHex
    },
    CardCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryOrangeHex
    },
    CardPrice: {
        color: COLORS.primaryWhiteHex
    },
    CardTableRow: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    SizeBoxLeft: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopLeftRadius: BORDERRADIUS.radius_10,
        borderBottomLeftRadius: BORDERRADIUS.radius_10,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: COLORS.primaryGreyHex,
    },
    SizeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.secondaryLightGreyHex
    },
    PriceBoxRight: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopRightRadius: BORDERRADIUS.radius_10,
        borderBottomRightRadius: BORDERRADIUS.radius_10,
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth: 1,
        borderLeftColor: COLORS.primaryGreyHex,
    },
    priceCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex
    },
    price: {
        color: COLORS.primaryWhiteHex
    },
    CardQuantityPriceText: {
        flex:1,
        textAlign:"center",
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex
    },
})


export default OderItemCard