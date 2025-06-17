import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";

export default function ScrollScreen({navigation}:any){
return(
    <View style={styles.container}>
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
    // FALTA COMPLETAR ESSE CSS, ELE ESTÁ NO SLIDE 12 DO REACT NATIVE 05!!!
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:10,

    }
    itemTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#333',
        marginBottom:10,
    },
    itemDescription:{
        fontSize:16,
        color:'#666',
        marginBottom:20,
        textAlign:'center',
    },
    button:{
        backgroundColor:'#dc3545',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    message: {
        fontSize:18,
        color:'#333',
        marginBottom:20,
    },
})