import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

const initialState = {
  email: '',
  password: ''
};

export default function LoginScreen({ navigation })  {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 20 * 2);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width-20*2;
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
  }, []);

  const onSubmit = () => {
    setIsOpenKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    navigation.navigate('home');
  };

  const keyboardHide = () => {
    setIsOpenKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={require("../../assets/images/main-bg.jpg")} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 0}>
          <View style={{ ...styles.form, width: dimensions + 40 }}>
            <View style={styles.formTitleBox}>
              <Text style={styles.formTitle}>Войти</Text>
            </View>
            <TextInput
              style={{...styles.input, width: dimensions}}
              placeholder={"Адрес электронной почты"}
              onFocus={() => setIsOpenKeyboard(true)}
              value={state.email}
              onChangeText={(value)=>setState((prevState)=>({...prevState, email: value}))}
            />
            <TextInput
              style={{...styles.input, width: dimensions}}
              placeholder={"Пароль"}
              secureTextEntry={true}
              onFocus={() => setIsOpenKeyboard(true)}
              value={state.password}
              onChangeText={(value)=>setState((prevState)=>({...prevState, password: value}))}
            />
            <TouchableOpacity
              style={{ ...styles.button, width: dimensions - 100 }}
              activeOpacity={0.8}
              onPress={onSubmit}
            >
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.linkBox, marginBottom: isOpenKeyboard ? 16 : 100 }}
                onPress={() => navigation.navigate('registration')}
              >
              <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  formTitleBox: {
    alignItems: 'center',
    marginVertical: 20,
  },
  formTitle: {
    fontFamily:"Roboto-Medium",
    fontSize: 30,
  },
  input: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    fontFamily:"Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    padding: 16,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily:"Roboto-Regular",
    fontSize: 16,
  },
  linkBox: {
    alignItems: 'center',
  },
  linkText: {
    fontFamily:"Roboto-Regular",
    fontSize: 16,
    color: '#1B4371',
  }
});
