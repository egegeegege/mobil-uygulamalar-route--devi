import React,{useState} from 'react';
import {SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';

export default function Login({navigation}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Giriş Ekranı</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="#FEFBF6"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Şifre"
          placeholderTextColor="#FEFBF6"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>Giriş Yap</Text>
        </TouchableOpacity>
        
       <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Signin")}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CB9BD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FEFBF6',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ECB159',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    border:"solid black 1px"
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#B67352',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '50%',
    marginRight:"10px"
  },
  buttonText: {
    color: 'white',
  },
});
