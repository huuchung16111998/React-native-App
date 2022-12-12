import React,{useEffect,useState,Component} from 'react';
import { SafeAreaView,View,Text,StyleSheet,ScrollView,TouchableOpacity,FlatList } from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import ModalView from '../components/ModalView';

const First =({navigation})=>{
      const [data,setData]=useState([]);
      const[filter,setFilter]=useState([])
      const[master,setMaster]=useState([])
      const[search,setSearch]=useState('')


      

      useEffect(()=>{
        fetchPost();
        apihandler();
      },[]);

      const fetchPost=()=>{
        const apiurl='https://jsonplaceholder.typicode.com/posts';
        // fetch(apiurl).then((response)=>response.json()).then((responseJS)=>{
        //         setFilter(responseJS);
        //         setMaster(responseJS);
        //         console.log()
        // }).catch((error)=>{
        //     console.error(error);
        // })
        fetch(apiurl,{
            method:"GET"
        }).then((res)=>res.json())
        .then(res=>{
            setFilter(res);
            setMaster(res);
            console(res)
        })
      }


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
      
      const ItemView=({item})=>{
        return(
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.tittle.toUpperCase()}
            </Text>
        )
      }

      const searchFilter=(text)=>{
            if(text){
                const newData=master.filter((item)=>{
                    const itemData=item.tittle ? item.tittle.toUpperCase():''.toUpperCase();
                    const textData=text.toUpperCase();
                    return itemData.indexOf(textData)>-1;

                });
                setFilter(newData);
                setSearch(text);
            }else{
                setFilter(master);
                setSearch(text);

            }
      }

      const ItemSeparatorView=()=>{
        return( 
         <View style={{height:0.5,width:'100%',backgroundColor:'#c8c8c8'}} />
      )}


        return(
          <SafeAreaView> 
            <View style={styles.header_container}>
              <TextInput 
                style={styles.textInputStyle}
                value={search}
                placeholder="search here"
                underlineColorAndroid='tranparent'
                onChangeText={(text)=>searchFilter(text)}
              />
              {/* <FlatList
                data={filter}
                keyExtractor={(item,index)=>index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              /> */}
                
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
                              <TouchableOpacity onPress={()=>{navigation.push('Update')}}>
                                    <Text style={styles.txt_edit} >update</Text>
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
    },
    container:{
        backgroundColor:'white'
    },
    itemStyle:{
        padding:15
    },
    textInputStyle:{

        height:60,
        borderWidth:1,
        paddingLeft:20,
        margin:5,
        borderColor:'',
        backgroundColor:'white'

    ,}
    
})

export default First;