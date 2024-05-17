import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradiantBGIcon from './GradiantBGIcon'
import { COLORS, FONTSIZE, SPACING } from '../theme/theme'

interface ImageBGInfoProps {
    EnableBackHanle: boolean,
    imageLink_portrait: ImageProps,
    type: string,
    id: string,
    favourite: boolean,
    name: string,
    special_ingredient: string,
    ingredients: string,
    avg_rating: number,
    rating_count: string,
    roasted: string,
    BackHandler?: any,  // "?" used for optional purpose
    ToggleFavourite: any
}

const ImageBGInfo: React.FC<ImageBGInfoProps> = ({
    EnableBackHanle,
    imageLink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    avg_rating,
    rating_count,
    roasted,
    BackHandler,
    ToggleFavourite
}) => {

    return (
        <View>
            <ImageBackground
                source={imageLink_portrait}
                style={styles.ItemBGImage} >
                {EnableBackHanle ? (
                    <View style={styles.ImageHeaderBarContainerWithBack} >
                        <TouchableOpacity onPress={() => { BackHandler() }} >
                            <GradiantBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            ToggleFavourite(favourite, type, id);
                        }} >
                            <GradiantBGIcon name='like' color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.ImageHeaderBarContainerWithoutBack} >
                        <TouchableOpacity onPress={() => {
                            ToggleFavourite(favourite, type, id)
                        }} >
                            <GradiantBGIcon name='like' color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                        </TouchableOpacity>
                    </View>
                )}
            </ImageBackground>
        </View>
    )
}

export default ImageBGInfo

const styles = StyleSheet.create({
    ItemBGImage: {
        width: "100%",
        aspectRatio: 20 / 25,
        justifyContent: "space-between"
    },
    ImageHeaderBarContainerWithBack: {
        padding: SPACING.space_30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    ImageHeaderBarContainerWithoutBack: {
        padding: SPACING.space_30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    }
})