import React,{useEffect,useState,Component} from 'react';
import { SafeAreaView,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';


const App =()=>{

      const [data,setData]=useState([]);
      const [email,setEmail]=useState([])
      const [username,setUserName]=useState([])
      const [password,setPassword]=useState([])
      useEffect(()=>{
        apihandler();
      },[]);
      const apihandler=()=>{
        const url="https://fakestoreapi.com/users?limit=4"
        fetch(url,{
          method:"GET"
        })
        .then((res)=>res.json())
        .then(res => {
          console.log(res);
          setData(res)

        })
      }

      const deleteUser=(item)=>{
        const url=`https://fakestoreapi.com/users/${item.id}`
        fetch(url,{
          method:'DELETE'
        }).then((res)=>{
          res.json().then((res)=>{
              console.log(url)
              // setData(res)
              apihandler();
          })
        })
          
        }
        const updateUser=()=>{
         
          const url=`https://fakestoreapi.com/users/${item.id}`
          fetch(url,{
            method:'PUT',
            data:{
                // "email":email,
                // "username":username,
                // "password":password,
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
                console.log(url)
                // setData(res)
                // apihandler();
            })
          })
        }

        const onchangeEmail=(value)=>{
            setEmail(value)
        }
        const onchangeUserName=(value)=>{
            setUserName(value)
        }
        const onchangePassword=(value)=>{
            setPassword(value)
        }

        return(
          <SafeAreaView> 
            <View style={styles.header_container}>
              <Text style={styles.txt_main}>Course</Text>
            </View>
            <View style={styles.form}>
              <TextInput value={email} style={styles.text_input} placeholder="email" onChangeText={onchangeEmail}>               
              </TextInput>
              <TextInput value={username} style={styles.text_input} placeholder="username" onChangeText={onchangeUserName}>               
              </TextInput>
              <TextInput value={password} style={styles.text_input} placeholder="password" onChangeText={onchangePassword}>               
              </TextInput>
            </View>
            <ScrollView style={styles.header_container} >
                  {
                    data.map((item)=>{
                        return (
                          <View key={item.id} style={styles.item_course}>
                            <View>

                                <Text style={styles.item}>geolocation.lat:{item.address.geolocation.lat}</Text>
                                <Text style={styles.item}>geolocation.long:{item.address.geolocation.long}</Text>
                                <Text style={styles.item}>address.city:{item.address.city}</Text>
                                <Text style={styles.item}>address.street:{item.address.street}</Text>
                                <Text style={styles.item}>address.number:{item.address.number}</Text>
                                <Text style={styles.item}>address.zipcode:{item.address.zipcode}</Text>  
                                <Text style={styles.item}>id:{item.id}</Text>                             
                                <Text style={styles.item}>email:{item.email}</Text>
                                <Text style={styles.item}>username:{item.username}</Text>
                                <Text style={styles.item}>password:{item.password}</Text>
                                <Text style={styles.item}>firstname:{item.name.firstname}</Text>
                                <Text style={styles.item}>lastname:{item.name.lastname}</Text> 
                                <Text style={styles.item}>phone:{item.phone}</Text>
                            </View>
                            <View>
                              <TouchableOpacity onPress={()=>deleteUser(item)}>
                                    <Text style={styles.txt_delete}>Delete</Text>
                              </TouchableOpacity>
                              <TouchableOpacity >
                                    <Text style={styles.txt_edit}>update</Text>
                              </TouchableOpacity>
                            </View>

                          </View>
                          
                        )
                    })
                  }
            </ScrollView>
         </SafeAreaView>  
    )
      }
        
// }

const styles =StyleSheet.create({
    form:{
      padding:15,
      backgroundColor:"#e3e3e3",
      marginTop:20
    },
    text_input:{
      padding:10,
      borderWidth:1,
      borderColor:"#e2e2e2"
    },
    header_container:{
      padding:15,
      backgroundColor:"#eeeeee",
      color:"red"
    },
    txt_main:{
      fontSize:22,
      fontWeight:"bold"

    },
    item_course:{
      padding:15,
      borderBottomWidth:1,
      borderBottomColor:"#e2e2e2",
      flexDirection:"row",
      justifyContent:"space-between"


    },
    txt_item:{
      fontSize:14,
      marginTop:5,
      color:"red"
    },
    txt_name:{
      fontSize:18,
      marginTop:5,
      fontWeight:"bold"
      
    },
    txt_delete:{
      fontSize:14,
      marginTop:5,
      color:"red",
      fontWeight:"bold"
    },
    txt_edit:{
      fontSize:14,
      marginTop:5,
      color:"blue",
      fontWeight:"bold"
    }
})

export default App;

// const App = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Routers />
//     </NavigationContainer>
//   );
// };
// export default App;
