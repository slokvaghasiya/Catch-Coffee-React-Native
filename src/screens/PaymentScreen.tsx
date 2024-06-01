import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradiantBGIcon from '../components/GradiantBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomeIcon from '../components/CustomeIcon';
import { useStore } from '../store/Store';
import PopupAnimatiom from '../components/PopupAnimatiom';

const PaymentList = [
  {
    name: "wallet",
    icon: "icon",
    isIcon: true,
  },
  {
    name: "Google Pay",
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: "Apple Pay",
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: "Amazon Pay",
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = ({ navigation, route }: any) => {

  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryList = useStore((state: any) => state.addToOrderHistoryList);

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryList()
    calculateCartPrice()
    setTimeout(() => {
      setShowAnimation(false)
      navigation.navigate("History")
    }, 2000)
  }

  return (
    <View style={styles.ScreenContainer} >
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {
        showAnimation ? (
          <PopupAnimatiom style={styles.LottieAnimation} source={require('../lottie/successful.json')} />
        ) : (<></>)
      }
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.HeaderContainer} >
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <GradiantBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
          </TouchableOpacity>
          <Text style={styles.HeaderText} >Payment</Text>
          <View style={styles.EmptyView} />
        </View>
        <View style={styles.paymentOptionContainer} >

          <TouchableOpacity onPress={() => setPaymentMode("Credit Card")} >
            <View style={[styles.CreditCardContainer, { borderColor: paymentMode == "Credit Card" ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex }]} >
              <Text style={styles.CreditCardText} >Credit Card</Text>
              <View style={styles.CreditCardBG} >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.LinearGradientStyle}
                >
                  <View style={styles.CreditCardRow} >
                    <CustomeIcon name='chip' size={FONTSIZE.size_20 * 2} color={COLORS.primaryOrangeHex} />
                    <CustomeIcon name='visa' size={FONTSIZE.size_30 * 2} color={COLORS.primaryWhiteHex} />
                  </View>
                  <View style={styles.CreditCardNumberContainer} >
                    <Text style={styles.CreditCardNumber} >5412</Text>
                    <Text style={styles.CreditCardNumber} >7436</Text>
                    <Text style={styles.CreditCardNumber} >9612</Text>
                    <Text style={styles.CreditCardNumber} >4512</Text>
                  </View>
                  <View style={styles.CreditCardRow} >
                    <View style={styles.CreditCardNameContainer} >
                      <Text style={styles.CreditCardNameSubTitle} >Card Holder Name</Text>
                      <Text style={styles.CreditCardNameTitle} >John Wicks</Text>
                    </View>
                    <View style={styles.CreditCardDateContainer} >
                      <Text style={styles.CreditCardNameSubTitle} >Expiry Date</Text>
                      <Text style={styles.CreditCardNameTitle} >02/30</Text>
                    </View  >
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {
            PaymentList.map((data: any) => (
              <TouchableOpacity key={data.name} onPress={() => setPaymentMode(data.name)} >
                <PaymentMethod
                  paymentMode={paymentMode}
                  name={data.name}
                  icon={data.icon}
                  isIcon={data.isIcon} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{ price: route.params.amount, currency: "$" }}
        buttonPressHandler={buttonPressHandler}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  LottieAnimation: {
    flex: 1
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex
  },
  EmptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  paymentOptionContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    borderWidth: 3
  },
  CreditCardText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10
  },
  CreditCardBG: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25
  },
  LinearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
  },
  CreditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  CreditCardNumberContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
  },
  CreditCardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 + SPACING.space_2
  },
  CreditCardNameContainer: {
    alignItems: "flex-start"
  },
  CreditCardNameSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CreditCardNameTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CreditCardDateContainer: {
    alignItems: "flex-end"
  },
})

export default PaymentScreen