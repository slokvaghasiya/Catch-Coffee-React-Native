import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import { COLORS } from '../theme/theme';
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CartScreen from '../screens/CartScreen'
import CustomeIcon from '../components/CustomeIcon'


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarBackground: () => (
                    <BlurView overlayColor='' blurAmount={50} style={styles.BlurView} />
                )
            }} >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomeIcon
                            name='home'
                            size={25}
                            color={
                                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                            }
                        />
                    )

                }} />

            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomeIcon
                            name='cart'
                            size={25}
                            color={
                                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                            }
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Favorite'
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomeIcon
                            name='like'
                            size={25}
                            color={
                                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                            }
                        />
                    )

                }}
            />
            <Tab.Screen
                name='History'
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomeIcon
                            name='bell'
                            size={25}
                            color={
                                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                            }
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        position: "absolute",
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: "transparent"
    },
    BlurView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})