import { View, Text, Keyboard, Platform } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SVGIcon } from "../../../assets/Svg";
import { height, width } from "react-native-dimension";
import { CustomText, H1 } from "../../../components/Text";
import AppColors from "../../../utills/AppColors";
import Button from "../../../components/Button";
import {
  SignUpDetailName,
  SignUpMethodName,
  SignUpScreenName,
} from "../../../routes/navigation/screenNames";
import { Navigation } from "react-native-navigation";
import TextField from "../../../components/TextField";
import { ScreenWrapper } from "~components";

export default function SignUpMethod(props) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.firstName) {
      handleError("Please Enter your first name", "firstName");
      isValid = false;
    } else if (!inputs.lastName) {
      handleError("Please input last name", "lastName");
      isValid = false;
    } else if (!inputs.email) {
      handleError("Please Enter email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    } else if (!inputs.password) {
      handleError("Please enter password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    } else {
      Navigation.push(props.componentId, {
        component: {
          name: SignUpDetailName,
        },
      });
    }

    // if (isValid) {
    //   register();
    // }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        Navigation.push(props.componentId, {
          component: {
            name: SignUpScreenName,
          },
        });
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 1000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <ScreenWrapper
      scrollEnabled
      transclucent={true}
    >
      <View style={styles.container}>
        <SVGIcon.polr />
        <View style={styles.buttonWithIcon}>
          <View>
            <View style={styles.spacing}>
              <H1
                color={AppColors.white}
                size={10}
                textAlign={"center"}
                fontWeight={"500"}
              >
                Sign Up
              </H1>
            </View>
            <TextField
              onBlur={() => {
                inputs.firstName == ""
                  ? handleError("Please Enter your first name", "firstName")
                  : handleError("", "firstName");
              }}
              error={errors.firstName}
              placeholder={"First Name"}
              onChange={(text) => {
                handleError("", "firstName");
                handleOnchange(text, "firstName");
              }}
              isLogin
            />
            <TextField
              onBlur={() => {
                inputs.lastName == ""
                  ? handleError("Please Enter your last name", "lastName")
                  : handleError("", "lastName");
              }}
              error={errors.lastName}
              placeholder={"Last Name"}
              onChange={(text) => {
                handleError("", "lastName");
                handleOnchange(text, "lastName");
              }}
              isLogin
            />
            <TextField
              onBlur={() => {
                inputs.email == ""
                  ? handleError("Please Enter your Email", "email")
                  : !inputs.email.match(/\S+@\S+\.\S+/)
                  ? handleError("Please input a valid email", "email")
                  : handleError("", "email");
              }}
              error={errors.email}
              placeholder={"Email"}
              onChange={(text) => {
                handleError("", "email");
                handleOnchange(text, "email");
              }}
              keyboardType={'email-address'}
              isLogin
            />
            <TextField
              onBlur={() => {
                inputs.password == ""
                  ? handleError("Please Enter password", "password")
                  : inputs.password.length < 5
                  ? handleError("Min password length of 5", "password")
                  : handleError("", "password");
              }}
              error={errors.password}
              placeholder={"Password"}
              secureTextEntry
              onChange={(text) => handleOnchange(text, "password")}
              isLogin
            />
          
          </View>
          <View style={styles.spacing}>
              <CustomText
                color={AppColors.white}
                size={3.5}
                lineHeight={Platform.OS == "ios" ? 0 : height(1.8)}
                fontWeight={"normal"}
                center
              >
                Password must use one uppercase{`\n`} letter, one number and a
                special symbol
              </CustomText>
            </View>
          <View>
            <Button title={"Sign up"} onPress={validate} />
            <View style={styles.row2}>
              <CustomText
                children={"Already a signed up? "}
                color={AppColors.white}
              />
              <CustomText
                children={"Log in"}
                color={AppColors.white}
                underLine
                onPress={() => console.log(" Term of use")}
              />
            </View>
            <View style={[styles.row2]}>
              <CustomText
                children={"By continuing you agree to POLR’s "}
                color={AppColors.white}
              />
              <CustomText
                children={"terms of use."}
                color={AppColors.white}
                underLine
                onPress={() => console.log(" Term of use")}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            title={"Back"}
            onPress={() =>
              Navigation.pop(props.componentId, {
                component: {
                  name: SignUpMethodName,
                },
              })
            }
          />
          {/* <Button
            title={"Next"}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: SignUpDetailName,
                },
              })
            }
          /> */}
        </View>
      </View>
    </ScreenWrapper>
  );
}
