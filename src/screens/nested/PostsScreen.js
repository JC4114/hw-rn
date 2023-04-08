import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const PostsScreen = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (route.params){
            setPosts((prev) => [...prev, route.params]);
        }
    }, [route.params]);
    // console.log(posts);
    
    return (
    <View style={styles.container}>
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({item}) =>
                <View style={{marginBottom: 10, justifyContent: "center", alignItems: "center"}}>
                    <Image source={{ uri: item.photo }} style={{ width: 350, height: 200, borderRadius: 10 }} />
                        <Text style={{fontSize: 16, color: '#BDBDBD'}}>{item.data.name}</Text>
                        <Text style={{fontSize: 16, color: '#BDBDBD'}}>{item.data.place}</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Map', item.location)}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Comments')}>
                            <Feather name="message-circle" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                </View>}
            />
        </View>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default PostsScreen;