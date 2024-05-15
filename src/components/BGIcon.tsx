import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, SPACING } from '../theme/theme'
import CustomeIcon from './CustomeIcon'

interface BGIconProps {
    name:string,
    color:string,
    size:number,
    BGColor:string
}

const BGIcon:React.FC<BGIconProps>= ({name,color,size,BGColor}) => {
  return (
    <View style={[styles.IconBG,{backgroundColor:BGColor}]} >
      <CustomeIcon name={name} color={color} size={size} />
    </View>
  )
}


const styles = StyleSheet.create({
    IconBG:{
        height:SPACING.space_30,
        width:SPACING.space_30,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:BORDERRADIUS.radius_10
    }
})

export default BGIcon