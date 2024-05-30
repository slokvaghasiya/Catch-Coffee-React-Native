import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageProps } from 'react-native'
import ImageBGInfo from './ImageBGInfo'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

interface FavoritesItemCardProps {
    id: string,
    name: string,
    type: string,
    avg_rating: number,
    imagelink_portrait: ImageProps,
    special_ingredient: string,
    ingredients: string,
    ratings_count: string,
    roasted: string,
    description: string,
    favourite: boolean,
    ToggleFavouriteItem:any
}

const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
    id,
    name,
    type,
    avg_rating,
    imagelink_portrait,
    special_ingredient,
    ingredients,
    ratings_count,
    roasted,
    description,
    favourite,
    ToggleFavouriteItem,

}) => {
    return (
        <View style={styles.CardContainer} >
            <ImageBGInfo 
                EnableBackHanle={false}
                imageLink_portrait={imagelink_portrait}
                type={type}
                id={id}
                favourite={favourite}
                name={name}
                special_ingredient={special_ingredient}
                ingredients={ingredients}
                avg_rating={avg_rating}
                rating_count={ratings_count}
                roasted={roasted}
                ToggleFavourite={ToggleFavouriteItem}
            />
            <LinearGradient
                start={{x:0,y:0}}
                end={{x:1,y:1}}
                colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
                style={styles.ContainerLinearGradient}
            >
                <Text style={styles.DescriptionTitle} >Description</Text>
                <Text style={styles.DescriptionText} >{description}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    CardContainer:{
        borderRadius:BORDERRADIUS.radius_25,
        overflow:"hidden"
    },
    ContainerLinearGradient:{
        gap:SPACING.space_10,
        padding:SPACING.space_20
    },
    DescriptionTitle:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_16,
        color:COLORS.secondaryLightGreyHex
    },
    DescriptionText:{
        fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_14,
        color:COLORS.primaryWhiteHex
    },
})

export default FavoritesItemCard
