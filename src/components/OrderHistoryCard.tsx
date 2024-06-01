import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import OderItemCard from './OderItemCard'

interface OrderHistoryCardProps {
    navigationHandler: any,
    CartList: any,
    CartListPrice: string,
    orderDate: string,
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
    navigationHandler,
    CartList,
    CartListPrice,
    orderDate,
}) => {
    return (
        <View style={styles.CardConatiner} >
            <View style={styles.CardHeader} >
                <View>
                    <Text style={styles.HeaderTitle} >Order Date</Text>
                    <Text style={styles.HeaderSubTitle} >{orderDate}</Text>
                </View>
                <View style={styles.PriceConatiner} >
                    <Text style={styles.HeaderTitle} >Total Price</Text>
                    <Text style={styles.HeaderPrice} >$ {CartListPrice}</Text>
                </View>
            </View>
            <View style={styles.ListContainer} >
                {
                    CartList.map((data:any,index:any)=>(
                        <TouchableOpacity key={index.toString() + data.id} >
                            <OderItemCard 
                            type={data.type} 
                            name={data.name}
                            imagelink_square={data.imagelink_square}
                            special_ingredient={data.special_ingredient}
                            prices={data.prices}
                            itemPrice={data.ItemPrice}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    CardConatiner: {
        gap:SPACING.space_10,
    },
    CardHeader: {
        flexDirection:"row",
        justifyContent:"space-around",
        gap:SPACING.space_20,
        alignItems:"center"
    },
    HeaderTitle: {
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_16,
        color:COLORS.primaryWhiteHex
    },
    HeaderSubTitle: {
        fontFamily:FONTFAMILY.poppins_light,
        fontSize:FONTSIZE.size_16,
        color:COLORS.primaryWhiteHex
    },
    PriceConatiner: {
        alignItems:"flex-end"
    },
    HeaderPrice: {
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_18,
        color:COLORS.primaryOrangeHex
    },
    ListContainer: {
        gap:SPACING.space_20,
    },
})
export default OrderHistoryCard