import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../theme/theme'

interface OderItemCardProps{
    type:String,
    name:String,
    imagelink_square:ImageProps,
    special_ingredient:string,
    prices:any,
    itemPrice:string,
}

const OderItemCard:React.FC<OderItemCardProps> = ({
    type,
    name,
    imagelink_square,
    special_ingredient,
    prices,
    itemPrice,
}) => {

    
  return (
    <LinearGradient
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
    style={styles.CardLinearGradient}
    >
        <View>
            <View>
                <Image source={imagelink_square} />
                <View>
                    <Text>{name}</Text>
                    <Text>{special_ingredient}</Text>
                </View>
            </View>
        </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    CardLinearGradient:{

    },
})


export default OderItemCard