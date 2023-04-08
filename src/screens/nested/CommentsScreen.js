import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const CommentScreen = () => {
    
    return (<View style={styles.container}>
        <Text>CommentScreen</Text>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CommentScreen;