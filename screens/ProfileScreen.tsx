import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Perfil</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Home')}
            >
             <Text style ={styles.buttonText}>Voltar para Home</Text>   
            </TouchableOpacity>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'#333',
    },
    button:{
        backgroundColor:'#28a745',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
})