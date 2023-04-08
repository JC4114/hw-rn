import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Dimensions,
    Platform,
} from 'react-native';
import { Camera } from "expo-camera";
import * as Location from 'expo-location';

const initialData = {
  name: '',
  place: ''
};

const CreatePostsScreen = ({ navigation }) => {
    const [data, setData] = useState(initialData);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);
    const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

    const [dimensions, setDimensions] = useState(Dimensions.get("window").width-20*2);

    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get("window").width-20*2;
            setDimensions(width);
        };
        Dimensions.addEventListener('change', onChange);
    }, []);

    const takePhoto = async () => {
        const location = await Location.getCurrentPositionAsync({});
        setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
        const photo = await camera.takePictureAsync();
        if (photo.uri) {
            setPhoto(photo.uri);
        } 
    };

    const sendPhoto = () => {
        setIsOpenKeyboard(false);
        Keyboard.dismiss();
        if (photo && location && data) {
            setIsOpenKeyboard(false);
            setPhoto(null);
            setLocation(null);
            setData(initialData);
            navigation.navigate('Posts', { photo, location, data });
        } 
    };

    const keyboardHide = () => {
    setIsOpenKeyboard(false);
    Keyboard.dismiss();
    };
    
    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                {!isOpenKeyboard&&<Camera style={styles.camera} ref={setCamera}>
                    {photo&&<View style={styles.takePhotoContainer}>
                        <Image source={{ uri: photo }} style={{width: 200, height: 200, borderRadius: 10}} />
                    </View>}
                    <TouchableOpacity style={styles.snapButton} onPress={takePhoto} >
                        <Text style={styles.snap}>Фото</Text>
                    </TouchableOpacity>
                </Camera>}
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 0}>
                    <View style={{ ...styles.form, width: dimensions + 40, marginTop: !isOpenKeyboard ? 0 : 25}}>
                        <TextInput
                            style={{...styles.input, width: dimensions}}
                            placeholder='Название'
                            onFocus={() => setIsOpenKeyboard(true)}
                            value={data.name}
                            onChangeText={(value)=>setData((prevState)=>({...prevState, name: value}))}
                        />
                        <TextInput
                            style={{...styles.input, width: dimensions}}
                            placeholder='Местоположение'
                            onFocus={() => setIsOpenKeyboard(true)}
                            value={data.place}
                            onChangeText={(value)=>setData((prevState)=>({...prevState, place: value}))}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={sendPhoto}>
                            <Text style={styles.send}>Опубликовать</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    camera: {
        justifyContent: "flex-end",
        alignItems: "center",
        height: "60%",
        marginHorizontal: 5,
    },
    snap: {
        color: '#FFF',
    },
    snapButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
    },
    takePhotoContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    form: {
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    input: {
        padding: 10,
        marginTop: 16,
        fontFamily:"Roboto-Regular",
        fontSize: 16,
        color: "#BDBDBD",
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD"
    },
    send: {
        fontSize: 16,
        color: 'grey',
    },
    sendButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 80,
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
    },
})

export default CreatePostsScreen;