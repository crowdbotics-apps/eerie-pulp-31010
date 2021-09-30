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
      <View style={styles.View_2_9}>
        <View style={styles.View_2_2} />
        <View style={styles.View_7_28}>
          <View style={styles.View_2_7}>
            <Text style={styles.Text_2_7}>ANGASFLI</Text>
          </View>
          <View style={styles.View_7_26}>
            <Text style={styles.Text_7_26}>M</Text>
          </View>
          <View style={styles.View_7_27}>
            <Text style={styles.Text_7_27}>X</Text>
          </View>
        </View>
        <View style={styles.View_112_73}>
          <View style={styles.View_112_74}>
            <Text style={styles.Text_112_74}>ANGASFLI</Text>
          </View>
          <View style={styles.View_112_75}>
            <Text style={styles.Text_112_75}>M</Text>
          </View>
          <View style={styles.View_112_76}>
            <Text style={styles.Text_112_76}>X</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f809/164c/e8d7007fb1f8a63d95d473459137d5e5"
          }}
          style={styles.ImageBackground_2_17}
        />
        <View style={styles.View_2_18} />
        <View style={styles.View_2_19} />
        <View style={styles.View_2_20}>
          <Text style={styles.Text_2_20}>JUJUTSU KAISEN</Text>
        </View>
        <View style={styles.View_2_21}>
          <Text style={styles.Text_2_21}>Manga</Text>
        </View>
        <View style={styles.View_3_9}>
          <View style={styles.View_3_2}>
            <View style={styles.View_3_0}>
              <Text style={styles.Text_3_0}>Sombrio</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb9/de29/b55f0b0771ad99f3d93af8274d01ab3a"
              }}
              style={styles.ImageBackground_3_1}
            />
          </View>
          <View style={styles.View_3_3}>
            <View style={styles.View_3_4}>
              <Text style={styles.Text_3_4}>Mistério</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb9/de29/b55f0b0771ad99f3d93af8274d01ab3a"
              }}
              style={styles.ImageBackground_3_5}
            />
          </View>
          <View style={styles.View_3_6}>
            <View style={styles.View_3_7}>
              <Text style={styles.Text_3_7}>Espirituoso</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb9/de29/b55f0b0771ad99f3d93af8274d01ab3a"
              }}
              style={styles.ImageBackground_3_8}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3_10}>
        <View style={styles.View_4_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286e/e7e4/6a152e0f2be5a3afc3239fcabcd84865"
            }}
            style={styles.ImageBackground_3_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/214c/09e7/fe28e55b0817581f342257e39d2abc4e"
            }}
            style={styles.ImageBackground_3_15}
          />
        </View>
        <View style={styles.View_4_14}>
          <View style={styles.View_4_2}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286e/e7e4/6a152e0f2be5a3afc3239fcabcd84865"
              }}
              style={styles.ImageBackground_3_13}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c4/5ed1/8db2907118a5a6c2fc8da79193e7c67a"
              }}
              style={styles.ImageBackground_4_1}
            />
          </View>
          <View style={styles.View_4_7}>
            <View style={styles.View_4_4} />
            <View style={styles.View_4_6}>
              <Text style={styles.Text_4_6}>One Piece</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_13}>
          <View style={styles.View_4_9}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286e/e7e4/6a152e0f2be5a3afc3239fcabcd84865"
              }}
              style={styles.ImageBackground_3_11}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be47/c86a/204603858dad41c4fb8a585d72132159"
              }}
              style={styles.ImageBackground_4_8}
            />
          </View>
          <View style={styles.View_4_10}>
            <View style={styles.View_4_11} />
            <View style={styles.View_4_12}>
              <Text style={styles.Text_4_12}>Gwanghae’S</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_17}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286e/e7e4/6a152e0f2be5a3afc3239fcabcd84865"
            }}
            style={styles.ImageBackground_3_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad0/8714/ee4481eb9a671fc01d94c8688f9b9598"
            }}
            style={styles.ImageBackground_4_16}
          />
          <View style={styles.View_4_18}>
            <View style={styles.View_4_19} />
            <View style={styles.View_4_20}>
              <Text style={styles.Text_4_20}>Tricks </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_14}>
        <View style={styles.View_7_6}>
          <View style={styles.View_7_2} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/106a/1c1f/0776dba2b4e4c7376188610010060bea"
            }}
            style={styles.ImageBackground_7_10}
          />
        </View>
        <View style={styles.View_7_7}>
          <View style={styles.View_7_3} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/bb27/91ee49875ac61e2db3b363d35c88a38c"
            }}
            style={styles.ImageBackground_7_11}
          />
        </View>
        <View style={styles.View_7_8}>
          <View style={styles.View_7_4} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f2/deb1/cf3fe3b909cf300acc65420b152e6fdd"
            }}
            style={styles.ImageBackground_7_12}
          />
        </View>
        <View style={styles.View_7_9}>
          <View style={styles.View_7_5} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8233/5fbb/53935460a840db600ebf733f4d4f5cf3"
            }}
            style={styles.ImageBackground_7_13}
          />
        </View>
      </View>
      <View style={styles.View_7_15}>
        <View style={styles.View_2_6}>
          <View style={styles.View_2_3} />
          <View style={styles.View_2_4} />
          <View style={styles.View_2_5} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b71d/05b1/0f80d4cc897238c0616dd672776ad94f"
          }}
          style={styles.ImageBackground_7_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1156/5f58/6ebec2b5870082da4049f94911e31b96"
          }}
          style={styles.ImageBackground_7_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3458/768d/90e217e041f8478343e7ab6655f679be"
          }}
          style={styles.ImageBackground_7_22}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(31, 31, 31, 1)" },
  View_2: { height: hp("100%") },
  View_2_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.092198581560284%"),
    minHeight: hp("7.092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.092198581560284%"),
    minHeight: hp("7.092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_28: {
    width: wp("37.8125%"),
    minWidth: wp("37.8125%"),
    height: hp("3.9716312056737593%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.9375%"),
    top: hp("1.8439716312056738%")
  },
  View_2_7: {
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
  Text_2_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_26: {
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
  Text_7_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_27: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.81249999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_73: {
    width: wp("37.8125%"),
    minWidth: wp("37.8125%"),
    height: hp("3.9716312056737593%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.9375%"),
    top: hp("1.8439716312056738%")
  },
  View_112_74: {
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
  Text_112_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_75: {
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
  Text_112_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_76: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3.9716312056737593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.81249999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_112_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_15: {
    width: wp("99.6875%"),
    minWidth: wp("99.6875%"),
    height: hp("44.680851063829785%"),
    minHeight: hp("44.680851063829785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.092198581560284%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_17: {
    width: wp("99.6875%"),
    minWidth: wp("99.6875%"),
    height: hp("66.32438930213874%"),
    minHeight: hp("66.32438930213874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-15.177304964539008%"),
    resizeMode: "cover"
  },
  View_2_18: {
    width: wp("99.6875%"),
    minWidth: wp("99.6875%"),
    height: hp("12.198581560283687%"),
    minHeight: hp("12.198581560283687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_19: {
    width: wp("99.6875%"),
    minWidth: wp("99.6875%"),
    height: hp("12.198581560283687%"),
    minHeight: hp("12.198581560283687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.4822695035461%")
  },
  View_2_20: {
    width: wp("28.125%"),
    minWidth: wp("28.125%"),
    minHeight: hp("8.51063829787234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.625%"),
    top: hp("31.347517730496456%"),
    justifyContent: "flex-start"
  },
  Text_2_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_21: {
    width: wp("10.9375%"),
    minWidth: wp("10.9375%"),
    minHeight: hp("1.9858156028368796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("28.51063829787234%"),
    justifyContent: "flex-start"
  },
  Text_2_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_9: {
    width: wp("47.1875%"),
    minWidth: wp("47.1875%"),
    height: hp("1.4184397163120568%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.25%"),
    top: hp("40.99290780141844%")
  },
  View_3_2: {
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
  View_3_0: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999964%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_1: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("0.7092198581560284%"),
    minHeight: hp("0.7092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4255319148936181%")
  },
  View_3_3: {
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
  View_3_4: {
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
  Text_3_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_5: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("0.7092198581560284%"),
    minHeight: hp("0.7092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4255319148936181%")
  },
  View_3_6: {
    width: wp("14.6875%"),
    minWidth: wp("14.6875%"),
    height: hp("1.4184397163120568%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5%"),
    top: hp("0%")
  },
  View_3_7: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("1.4184397163120568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_8: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    height: hp("0.7092198581560284%"),
    minHeight: hp("0.7092198581560284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4255319148936181%")
  },
  View_3_10: {
    width: wp("99.6875%"),
    minWidth: wp("99.6875%"),
    height: hp("16.453900709219855%"),
    minHeight: hp("16.453900709219855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.90780141843972%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_0: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6875%"),
    top: hp("1.7021276595744652%")
  },
  ImageBackground_3_14: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_15: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_14: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.62499999999999%"),
    top: hp("1.7021276595744652%")
  },
  View_4_2: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_13: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_1: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_7: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    height: hp("3.6879432624113475%"),
    minHeight: hp("3.6879432624113475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%"),
    top: hp("7.659574468085111%")
  },
  View_4_4: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    height: hp("3.6879432624113475%"),
    minHeight: hp("3.6879432624113475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_6: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    minHeight: hp("2.553191489361702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("0.8510638297872362%"),
    justifyContent: "flex-start"
  },
  Text_4_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_13: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("1.7021276595744652%")
  },
  View_4_9: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_11: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_8: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_10: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3.6879432624113475%"),
    minHeight: hp("3.6879432624113475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.659574468085111%")
  },
  View_4_11: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    height: hp("3.6879432624113475%"),
    minHeight: hp("3.6879432624113475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    top: hp("0%")
  },
  View_4_12: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2.553191489361702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8510638297872362%"),
    justifyContent: "flex-start"
  },
  Text_4_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_17: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.5625%"),
    top: hp("1.7021276595744652%")
  },
  ImageBackground_3_12: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_16: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11.347517730496454%"),
    minHeight: hp("11.347517730496454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_18: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    height: hp("3.6879432624113475%"),
    minHeight: hp("3.6879432624113475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8125%"),
    top: hp("7.659574468085111%")
  },
  View_4_19: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    height: hp("3.6879432624113475%"),
    minHeight: hp("3.6879432624113475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_20: {
    width: wp("11.875%"),
    minWidth: wp("11.875%"),
    minHeight: hp("2.553191489361702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.75%"),
    top: hp("0.8510638297872362%"),
    justifyContent: "flex-start"
  },
  Text_4_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_14: {
    width: wp("98.75%"),
    minWidth: wp("98.75%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("71.63120567375887%")
  },
  View_7_6: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_2: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_7_10: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_7: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.875%"),
    top: hp("0%")
  },
  View_7_3: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_7_11: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_8: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.125%"),
    top: hp("0%")
  },
  View_7_4: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_7_12: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_9: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("0%")
  },
  View_7_5: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_7_13: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    height: hp("19.43262411347518%"),
    minHeight: hp("19.43262411347518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_15: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.24113475177305%"),
    minHeight: hp("6.24113475177305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92.34042553191489%"),
    backgroundColor: "rgba(31, 31, 31, 1)",
    overflow: "hidden"
  },
  View_2_6: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    height: hp("2.8368794326241136%"),
    minHeight: hp("2.8368794326241136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("1.7021276595744723%")
  },
  View_2_3: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    height: hp("0.5673758865248227%"),
    minHeight: hp("0.5673758865248227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_4: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    height: hp("0.5673758865248227%"),
    minHeight: hp("0.5673758865248227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.1347517730496435%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_5: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    height: hp("0.5673758865248227%"),
    minHeight: hp("0.5673758865248227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.269503546099287%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_7_19: {
    width: wp("6.269593238830566%"),
    height: hp("2.8368794326241136%"),
    top: hp("1.7021276595744723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.375%")
  },
  ImageBackground_7_17: {
    width: wp("7.210030555725097%"),
    height: hp("2.8368794326241136%"),
    top: hp("1.7021276595744723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.375%")
  },
  ImageBackground_7_22: {
    width: wp("6.269598007202148%"),
    height: hp("2.8368794326241136%"),
    top: hp("1.7021276595744723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4375%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
