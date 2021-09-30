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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d08/7071/a954d2861e680ade2d9fb9c4bd8ec5cb"
        }}
        style={styles.ImageBackground_102_102}
      />
      <View style={styles.View_102_126} />
      <View style={styles.View_102_127} />
      <View style={styles.View_102_125} />
      <View style={styles.View_102_128}>
        <Text style={styles.Text_102_128}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={styles.View_102_129}>
        <View style={styles.View_102_130}>
          <View style={styles.View_102_131}>
            <Text style={styles.Text_102_131}>Sombrio</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb9/de29/b55f0b0771ad99f3d93af8274d01ab3a"
            }}
            style={styles.ImageBackground_102_132}
          />
        </View>
        <View style={styles.View_102_133}>
          <View style={styles.View_102_134}>
            <Text style={styles.Text_102_134}>Mistério</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb9/de29/b55f0b0771ad99f3d93af8274d01ab3a"
            }}
            style={styles.ImageBackground_102_135}
          />
        </View>
        <View style={styles.View_102_136}>
          <View style={styles.View_102_137}>
            <Text style={styles.Text_102_137}>Espirituoso</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb9/de29/b55f0b0771ad99f3d93af8274d01ab3a"
            }}
            style={styles.ImageBackground_102_138}
          />
        </View>
      </View>
      <View style={styles.View_102_148}>
        <View style={styles.View_102_139}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/696d/14af/69272b87aaab1a3645ed4fa17d2ce1f9"
            }}
            style={styles.ImageBackground_102_140}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4724/ee1b/f5bdc2480b8ac20331b95a34df2750af"
          }}
          style={styles.ImageBackground_102_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd7/9039/47f627274ac13bb380a3708f49df67de"
          }}
          style={styles.ImageBackground_102_146}
        />
      </View>
      <View style={styles.View_102_149}>
        <Text style={styles.Text_102_149}>JUJUTSU KAISEN</Text>
      </View>
      <View style={styles.View_102_150}>
        <View style={styles.View_102_151}>
          <Text style={styles.Text_102_151}>ANGASFLI</Text>
        </View>
        <View style={styles.View_102_152}>
          <Text style={styles.Text_102_152}>M</Text>
        </View>
        <View style={styles.View_102_153}>
          <Text style={styles.Text_102_153}>X</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51a9/d2f2/6314504fcbad4ef37f767227cf760e88"
        }}
        style={styles.ImageBackground_102_158}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(31, 31, 31, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_102_102: {
    width: wp("274.6875%"),
    minWidth: wp("274.6875%"),
    height: hp("105.10638297872342%"),
    minHeight: hp("105.10638297872342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-32.5%"),
    top: hp("-0.7092198581560284%"),
    resizeMode: "cover"
  },
  View_102_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42.12765957446808%"),
    minHeight: hp("42.12765957446808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.87234042553191%")
  },
  View_102_127: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("29.078014184397162%"),
    minHeight: hp("29.078014184397162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_102_125: {
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
  View_102_128: {
    width: wp("77.8125%"),
    minWidth: wp("77.8125%"),
    minHeight: hp("10.78014184397163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("76.17021276595744%"),
    justifyContent: "flex-start"
  },
  Text_102_128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_129: {
    width: wp("47.1875%"),
    minWidth: wp("47.1875%"),
    height: hp("1.4184397163120568%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.5625%"),
    top: hp("71.20567375886525%")
  },
  View_102_130: {
    width: wp("11.875%"),
    minWidth: wp("11.875%"),
    height: hp("1.4184397163120568%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_102_131: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5000000000000036%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_102_131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_102_132: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("0.7092198581560284%"),
    minHeight: hp("0.7092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4255319148936252%")
  },
  View_102_133: {
    width: wp("11.875%"),
    minWidth: wp("11.875%"),
    height: hp("1.4184397163120568%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.25%"),
    top: hp("0%")
  },
  View_102_134: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_102_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_102_135: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("0.7092198581560284%"),
    minHeight: hp("0.7092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4255319148936252%")
  },
  View_102_136: {
    width: wp("14.6875%"),
    minWidth: wp("14.6875%"),
    height: hp("1.4184397163120568%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.49999999999999%"),
    top: hp("0%")
  },
  View_102_137: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.187500000000014%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_102_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_102_138: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("0.7092198581560284%"),
    minHeight: hp("0.7092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4255319148936252%")
  },
  View_102_148: {
    width: wp("72.8125%"),
    minWidth: wp("72.8125%"),
    height: hp("3.546099290780142%"),
    minHeight: hp("3.546099290780142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.750000000000002%"),
    top: hp("91.77304964539007%")
  },
  View_102_139: {
    width: wp("6.5625%"),
    minWidth: wp("6.5625%"),
    height: hp("2.9787234042553195%"),
    minHeight: hp("2.9787234042553195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8125%"),
    top: hp("0.425531914893611%")
  },
  ImageBackground_102_140: {
    width: wp("6.5625%"),
    height: hp("2.9787234042553195%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_102_144: {
    width: wp("6.875000000000001%"),
    height: hp("3.120567375886525%"),
    top: hp("0.425531914893611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_102_146: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.3125%")
  },
  View_102_149: {
    width: wp("28.125%"),
    minWidth: wp("28.125%"),
    minHeight: hp("8.51063829787234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.9375%"),
    top: hp("57.87234042553191%"),
    justifyContent: "flex-start"
  },
  Text_102_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_150: {
    width: wp("37.8125%"),
    minWidth: wp("37.8125%"),
    height: hp("3.9716312056737593%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.25%"),
    top: hp("3.120567375886525%")
  },
  View_102_151: {
    width: wp("26.25%"),
    minWidth: wp("26.25%"),
    minHeight: hp("2.9787234042553195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5625%"),
    top: hp("0.14184397163120543%"),
    justifyContent: "flex-start"
  },
  Text_102_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_152: {
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
  Text_102_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_153: {
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
  Text_102_153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_102_158: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("3.404255319148936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.0625%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
