import React from 'react';
import { Button } from 'react-native';
import { SafeAreaView,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';


const UpdateScreen=(item)=>{
    // const [email,setEmail]=useState("");
    // const [username,setUserName]=useState("");
    // const [password,setPassword]=useState("");


    const onchangeEmail=(value)=>{
            setEmail(value)
        }
    const onchangetUserName=(value)=>{
            setUserName(value)
        }
    const onchangePassword=(value)=>{
            setPassword(value)
        }
    const url=`https://fakestoreapi.com/users/${item.id}`
        fetch(url,{
          method:'PUT',
          data:{
              "email":'John@gmail.com',
              "username":'johnd',
              "password":'m38rmF$',
              "email":"John@gmail.com",
              "username":"johnd",
              "password":"m38rmF$",
              "name":{
                  "firstname":"John",
                  "lastname":"Doe"
              },
              "address":{
                  "city":"kilcoole",
                  "street":"7835 new road",
                  "number":3,
                  "zipcode":"12926-3874",
                  "geolocation":{
                      "lat":"-37.3159",
                      "long":"81.1496"
                  }
              },
              "phone":"1-570-236-7033"
          }
        }).then((res)=>{
          res.json().then((res)=>{
              console.log(data)
              // setData(res)
              // apihandler();
          })
        })

    return(
        <View>
            <TextInput
            // value={email}
            style={styles.text_input} 
            placeholder="email" 
            // onChangeText={onchangeEmail}
            >               
            </TextInput>
            <TextInput
            // value={username}  
            style={styles.text_input} 
            placeholder="username"
            // onChangeText={onchangetUserName} 
            >               
            </TextInput>
            <TextInput
            // value={password}  
            style={styles.text_input} 
            placeholder="password" 
            // onChangeText={onchangePassword}>
            >               
            </TextInput>
            <TouchableOpacity >
                <Text style={styles.txt_edit}>Save</Text>               
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt_edit}>Back</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles =StyleSheet.create({

    text_input:{
      padding:10,
      borderWidth:1,
      borderColor:"#e2e2e2"
    },
    txt_edit:{
        fontSize:14,
        marginTop:5,
        color:"blue",
        fontWeight:"bold"
    }
})
export default UpdateScreen;