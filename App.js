import { ImageBackground, StyleSheet, TextInput, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require("./assets/ae59d8cc3aacd26854e382af3478836a.jpg")}
      style={styles.image}
      
      >
<TextInput style={styles.input}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    flex:1,
  resizeMode:'cover',
justifyContent:'center',
alignItems:'center'},
input:{
  borderWidth:1,
  borderColor:'#fff'
}
});
