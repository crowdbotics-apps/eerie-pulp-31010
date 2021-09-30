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
      <View style={styles.View_112_91}>
        <Text style={styles.Text_112_91}>Login</Text>
      </View>
      <View style={styles.View_112_94} />
      <View style={styles.View_112_95} />
      <View style={styles.View_112_96}>
        <Text style={styles.Text_112_96}>Digite seu email</Text>
      </View>
      <View style={styles.View_112_97}>
        <Text style={styles.Text_112_97}>Digite sua senha</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b319/2cd2/36cff4a7d78744bda2c9a13ee4ad2fc3"
        }}
        style={styles.ImageBackground_112_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326c/9779/fed160e41f1c7655cd092402da1b2014"
        }}
        style={styles.ImageBackground_112_101}
      />
      <View style={styles.View_112_108}>
        <View style={styles.View_112_104} />
        <View style={styles.View_112_105}>
          <Text style={styles.Text_112_105}>Entrar</Text>
        </View>
      </View>
      <View style={styles.View_112_106}>
        <Text style={styles.Text_112_106}>
          Ainda não possue conta? Cadastrese
        </Text>
      </View>
      <View style={styles.View_112_107}>
        <Text style={styles.Text_112_107}>Esquecru a senha?</Text>
      </View>
      <View style={styles.View_113_124}>
        <View style={styles.View_113_122}>
          <Text style={styles.Text_113_122}>MANGA </Text>
        </View>
        <View style={styles.View_113_123}>
          <Text style={styles.Text_113_123}>FLIX</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("100%") },
  View_112_91: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("7.659574468085106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.1875%"),
    top: hp("33.47517730496454%"),
    justifyContent: "flex-start"
  },
  Text_112_91: {
    color: "rgba(233, 236, 238, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_94: {
    width: wp("86.25%"),
    minWidth: wp("86.25%"),
    height: hp("6.524822695035461%"),
    minHeight: hp("6.524822695035461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000001%"),
    top: hp("50.070921985815595%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929
  },
  View_112_95: {
    width: wp("86.25%"),
    minWidth: wp("86.25%"),
    height: hp("6.524822695035461%"),
    minHeight: hp("6.524822695035461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000001%"),
    top: hp("60.851063829787236%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929
  },
  View_112_96: {
    width: wp("35.625%"),
    minWidth: wp("35.625%"),
    minHeight: hp("2.8368794326241136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.5625%"),
    top: hp("51.91489361702127%"),
    justifyContent: "flex-start"
  },
  Text_112_96: {
    color: "rgba(30, 40, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_97: {
    width: wp("36.875%"),
    minWidth: wp("36.875%"),
    minHeight: hp("2.8368794326241136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.5625%"),
    top: hp("62.69503546099291%"),
    justifyContent: "flex-start"
  },
  Text_112_97: {
    color: "rgba(30, 40, 65, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_112_98: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("51.91489361702127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.5625%")
  },
  ImageBackground_112_101: {
    width: wp("7.5%"),
    height: hp("3.404255319148936%"),
    top: hp("62.69503546099291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.5625%")
  },
  View_112_108: {
    width: wp("86.25%"),
    minWidth: wp("86.25%"),
    height: hp("6.666666666666667%"),
    minHeight: hp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000001%"),
    top: hp("74.8936170212766%")
  },
  View_112_104: {
    width: wp("86.25%"),
    minWidth: wp("86.25%"),
    height: hp("6.666666666666667%"),
    minHeight: hp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_112_105: {
    width: wp("19.6875%"),
    minWidth: wp("19.6875%"),
    minHeight: hp("3.829787234042553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0.9929078014184398%"),
    justifyContent: "flex-start"
  },
  Text_112_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_106: {
    width: wp("65.625%"),
    minWidth: wp("65.625%"),
    minHeight: hp("2.269503546099291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8125%"),
    top: hp("87.3758865248227%"),
    justifyContent: "flex-start"
  },
  Text_112_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_107: {
    width: wp("32.8125%"),
    minWidth: wp("32.8125%"),
    minHeight: hp("2.269503546099291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.75%"),
    top: hp("91.77304964539007%"),
    justifyContent: "flex-start"
  },
  Text_112_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_124: {
    width: wp("46.875%"),
    minWidth: wp("46.875%"),
    height: hp("16.453900709219855%"),
    minHeight: hp("16.453900709219855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.5625%"),
    top: hp("9.219858156028367%")
  },
  View_113_122: {
    width: wp("45.9375%"),
    minWidth: wp("45.9375%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375000000000036%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_122: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_123: {
    width: wp("46.25%"),
    minWidth: wp("46.25%"),
    minHeight: hp("13.191489361702127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.262411347517732%"),
    justifyContent: "flex-start"
  },
  Text_113_123: {
    color: "rgba(255, 236, 68, 1)",
    fontSize: 54,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
