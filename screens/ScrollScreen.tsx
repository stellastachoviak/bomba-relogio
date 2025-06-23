import { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";

export default function ScrollScreen({navigation}:any){
 const[clickCount,setClickCount]=useState(0)
return(
    <View style={styles.container}>
        <Text style={styles.counterText}>Itens clicados:{clickCount}</Text>
        <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={()=>{
            setClickCount((prevCount)=>prevCount+1);
            navigation.navigate('Details',{mensagem:`Item ${index+1}clicado!`})
        }}
        >

        </TouchableOpacity>
        <Text style={styles.title}>Tela com ScrollView</Text>
        <ScrollView style={styles.scrollContainer}>
            {Array.from({ length:20}).map((_,index)=> (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>Item{index+1}</Text>
                </View>
            ))}

        </ScrollView>
        <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate('Home')}
        >
            <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'#333',
        textAlign:'center',
    },
    scrollContainer:{
        flex:1,
    },
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ddd'

    },
    itemText:{
        fontSize:16,
        color:'#333',
    },
    button:{
        backgroundColor:'#007bff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    counterText:{
        fontSize:18,
        color:'#333',
        marginBottom:10,
    },
})