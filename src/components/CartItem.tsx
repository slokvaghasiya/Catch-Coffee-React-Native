import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { Image } from 'react-native'

interface CartItemProps {
    id: string,
    name: string,
    imagelink_square: ImageProps,
    special_ingredient: string,
    roasted: string,
    type: string,
    prices: any,
    incrementCartItemQuantity: any,
    decrementCartItemQuantity: any,
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    imagelink_square,
    special_ingredient,
    roasted,
    type,
    prices,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
}) => {
    return (
        <View>
            {prices.length != 1 ? (
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                    style={styles.CartItemLinearGradient}
                >
                    <View style={styles.CartItemRow} >
                        <Image source={imagelink_square} style={styles.CartItemImage} />

                        <View style={styles.CartItemInfo} >
                            <View>
                                <Text style={styles.CartItemTitle} >{name}</Text>
                                <Text style={styles.CartItemSUBTitle} >{special_ingredient}</Text>
                            </View>
                            <View style={styles.CartItemRoastedContainer} >
                                <Text style={styles.CartItemRoastText} >{roasted}</Text>
                            </View>
                        </View>
                    </View>
                    {
                        prices.map((data: any, index: any) => (
                            <View key={index.toString()} style={styles.CartItemSizeContainer} >
                                <View style={styles.CartItemSizeValueContainer} >

                                    <View style={styles.SizeBox} >
                                        <Text
                                            style={[styles.SizeText, { fontSize: type == "beans" ? FONTSIZE.size_12 : FONTSIZE.size_16 }]} >
                                            {data.size}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </LinearGradient>) : (
                <
                    // start={{ x: 0, y: 0 }}
                    // end={{ x: 1, y: 1 }}
                    // colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                    // style={styles.CartItemLinearGradient}>
                    // <View style={styles.CartItemRow} 
                    >
                    {/* <Image source={imagelink_square} style={styles.CartItemImage} />

                        <View style={styles.CartItemInfo} >
                            <View>
                                <Text>{name}</Text>
                                <Text>{name}</Text>
                            </View>
                        </View>
                    </View> */}
                </>)}
        </View>
    )
}

const styles = StyleSheet.create({
    CartItemLinearGradient: {
        flex: 1,
        gap: SPACING.space_12,
        padding: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_25
    },
    CartItemRow: {
        flexDirection: "row",
        flex: 1,
        gap: SPACING.space_12,
    },
    CartItemImage: {
        height: 130,
        width: 130,
        borderRadius: BORDERRADIUS.radius_20
    },
    CartItemInfo: {
        flex: 1,
        paddingVertical: SPACING.space_4,
        justifyContent: "space-between"
    },
    CartItemTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    CartItemSUBTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.secondaryLightGreyHex
    },
    CartItemRoastedContainer: {
        height: 50,
        width: 50 * 2 + SPACING.space_20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: BORDERRADIUS.radius_15,
        backgroundColor: COLORS.primaryDarkGreyHex
    },
    CartItemRoastText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        color: COLORS.primaryWhiteHex
    },
    CartItemSizeContainer: {
        flex:1,
        alignItems:"center",
        gap:SPACING.space_20,
        flexDirection:"row",
        justifyContent:"center"
    },
    CartItemSizeValueContainer: {
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    SizeBox: {
        backgroundColor:COLORS.primaryBlackHex,
        height:40,
        width:100,
        borderRadius: BORDERRADIUS.radius_10,
        alignItems:"center",
        justifyContent:"center"
    },
    SizeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.secondaryLightGreyHex
    },
})

export default CartItem
