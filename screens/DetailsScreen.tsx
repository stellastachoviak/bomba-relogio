import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Detalhes</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.goBack()}
            >
             <Text style ={styles.buttonText}>Voltar</Text>   
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'#333',
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
})