import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import AppColors from '~utills/AppColors';
import styles from './styles';
import {login} from '~redux/slices/authSlice';
import {useDispatch} from 'react-redux';
import {SVGIcon} from '~assets/Svg';
import {Button, CustomText, ScreenWrapper, TextField} from '~components';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please Enter email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    } else if (!inputs.password) {
      handleError('Please enter password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    } else {
      setMainAppFlow();
    }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <ScreenWrapper backgroundImage transclucent scrollEnabled>
      <View style={styles.mainViewContainer}>
        <SVGIcon.polr />
        <View style={styles.inputCountainer}>
          <SVGIcon.welcome />
          <View style={styles.inputInnerCountainer}>
            <TextField
              keyboardType={'email-address'}
              name={'email'}
              placeholder={'Email'}
              onChange={text => {
                handleError('', 'email');
                handleOnchange(text, 'email');
              }}
              onBlur={() => {
                inputs.email == ''
                  ? handleError('Please Enter your Email', 'email')
                  : !inputs.email.match(/\S+@\S+\.\S+/)
                  ? handleError('Please input a valid email', 'email')
                  : handleError('', 'email');
              }}
              error={errors.email}
              isLogin
            />
            <TextField
              name={'password'}
              onBlur={() => {
                inputs.password == ''
                  ? handleError('Please Enter password', 'password')
                  : inputs.password.length < 5
                  ? handleError('Min password length of 5', 'password')
                  : handleError('', 'password');
              }}
              error={errors.password}
              placeholder={'Password'}
              secureTextEntry
              onChange={text => handleOnchange(text, 'password')}
              isLogin
            />
          </View>
          <Button title={'Login'} onPress={() => dispatch(login({}))} />
          <View style={styles.row}>
            <CustomText
              color={AppColors.white}
              // lineHeight={width(15)}
            >
              Don’t have an account?
            </CustomText>
            <CustomText
              color={AppColors.white}
              // lineHeight={width(15)}
              underLine>
              Sign up
            </CustomText>
          </View>
        </View>
        <View style={styles.footerText}>
          <View style={styles.row}>
            <CustomText
              children={'By continuing you agree to POLR’s '}
              color={AppColors.white}
            />
            <CustomText
              children={'terms of use.'}
              color={AppColors.white}
              underLine
              onPress={() => console.log(' Term of use')}
            />
          </View>
          <CustomText
            // lineHeight={width(8)}
            onPress={() => console.log('Forget password')}
            color={AppColors.white}
            underLine>
            Forgot password{' '}
          </CustomText>
        </View>
      </View>
    </ScreenWrapper>
  );
}
