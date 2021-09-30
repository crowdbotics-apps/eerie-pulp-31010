import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_108_6} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c01/1a4f/1e3071b01630ee6f4c9527d53aa28653"
        }}
        style={styles.ImageBackground_108_36}
      />
      <View style={styles.View_109_2}>
        <View style={styles.View_109_3}>
          <Text style={styles.Text_109_3}>ANGASFLI</Text>
        </View>
        <View style={styles.View_109_4}>
          <Text style={styles.Text_109_4}>M</Text>
        </View>
        <View style={styles.View_109_5}>
          <Text style={styles.Text_109_5}>X</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51a9/d2f2/6314504fcbad4ef37f767227cf760e88"
        }}
        style={styles.ImageBackground_109_6}
      />
      <View style={styles.View_109_9} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd7/9039/47f627274ac13bb380a3708f49df67de"
        }}
        style={styles.ImageBackground_109_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/076b/81a0/5d6899fe5f0172a4a3ea2896b93effd5"
        }}
        style={styles.ImageBackground_109_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e83a/f500/14b4e4975e13fec69c0aa6d1283f6fc5"
        }}
        style={styles.ImageBackground_109_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa6/3952/4c09c6cadb98d3e137d142e8672798f8"
        }}
        style={styles.ImageBackground_109_26}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(31, 31, 31, 1)" },
  View_2: { height: hp("100%") },
  View_108_6: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.28999999165534973
  },
  ImageBackground_108_36: {
    width: wp("116.56249999999999%"),
    minWidth: wp("116.56249999999999%"),
    height: hp("77.16312056737588%"),
    minHeight: hp("77.16312056737588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.25%"),
    top: hp("10.638297872340425%"),
    resizeMode: "cover"
  },
  View_109_2: {
    width: wp("37.8125%"),
    minWidth: wp("37.8125%"),
    height: hp("3.9716312056737593%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.25%"),
    top: hp("2.8368794326241136%")
  },
  View_109_3: {
    width: wp("26.25%"),
    minWidth: wp("26.25%"),
    minHeight: hp("2.9787234042553195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5625%"),
    top: hp("0.14184397163120588%"),
    justifyContent: "flex-start"
  },
  Text_109_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_109_4: {
    width: wp("6.5625%"),
    minWidth: wp("6.5625%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_109_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_109_5: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8125%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_109_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_109_6: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("3.120567375886525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.4375%")
  },
  View_109_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.198581560283687%"),
    minHeight: hp("12.198581560283687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.80141843971631%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_109_10: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("92.19858156028369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.6875%")
  },
  ImageBackground_109_12: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("92.19858156028369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8125%")
  },
  ImageBackground_109_21: {
    width: wp("5.625%"),
    height: hp("2.553191218815797%"),
    top: hp("92.78229409075797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.68750000000001%")
  },
  ImageBackground_109_26: {
    width: wp("5.625%"),
    height: hp("2.553191218815797%"),
    top: hp("92.90780141843972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.6875%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
