import { ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { Image } from 'react-native'
import CustomeIcon from './CustomeIcon'

interface CartItemProps {
    id: string,
    name: string,
    imagelink_square: ImageProps,
    special_ingredient: string,
    roasted: string,
    type: string,
    prices: any,
    incrementCartItemQuantityHandler: any,
    decrementCartItemQuantityHandler: any,
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    imagelink_square,
    special_ingredient,
    roasted,
    type,
    prices,
    incrementCartItemQuantityHandler,
    decrementCartItemQuantityHandler,
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
                                    <Text style={styles.SizeCurrency} >{data.currency}<Text style={styles.SizePrice} > {data.price}</Text></Text>
                                </View>
                                <View style={styles.CartItemSizeValueContainer} >
                                    <TouchableOpacity
                                        style={styles.CartItemIcon}
                                        onPress={() => {
                                            decrementCartItemQuantityHandler(id, data.size)
                                        }}
                                    >
                                        <CustomeIcon name='minus' color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
                                    </TouchableOpacity>
                                    <View style={styles.CartItemQuantityContainer} >
                                        <Text style={styles.CartItemQuantityText} >{data.quantity}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.CartItemIcon}
                                        onPress={() => {
                                            incrementCartItemQuantityHandler(id, data.size)
                                        }}
                                    >
                                        <CustomeIcon name='add' color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </LinearGradient>) : (
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                    style={styles.CartItemSingleLinearGradient}>

                    <View style={styles.CartItemRow} >
                        <Image source={imagelink_square} style={styles.CartItemSingleImage} />
                    </View>

                </LinearGradient>)}
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
        flex: 1,
        alignItems: "center",
        gap: SPACING.space_20,
        flexDirection: "row",
        justifyContent: "center"
    },
    CartItemSizeValueContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    SizeBox: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 40,
        width: 100,
        borderRadius: BORDERRADIUS.radius_10,
        alignItems: "center",
        justifyContent: "center"
    },
    SizeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.secondaryLightGreyHex
    },
    SizeCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex
    },
    SizePrice: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    CartItemIcon: {
        backgroundColor: COLORS.primaryOrangeHex,
        padding: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_10
    },
    CartItemQuantityContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        width: 80,
        borderRadius: BORDERRADIUS.radius_10,
        borderColor: COLORS.primaryOrangeHex,
        borderWidth: 2,
        alignItems: "center",
        paddingVertical: SPACING.space_4
    },
    CartItemQuantityText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex
    },
    CartItemSingleLinearGradient: {
        flexDirection:"row",
        alignItems:"center",
        padding:SPACING.space_12,
        gap:SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_25
    },
    CartItemSingleImage: {
        height: 150,
        width: 130,
        borderRadius: BORDERRADIUS.radius_20
    },
})

export default CartItem