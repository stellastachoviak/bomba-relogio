import { StyleSheet, View, Text } from "react-native";


export default function Card(props:{texto:string}){
    return(
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
    marginTop:20,
    borderWidth:1,
    borderColor:'#ccc',
    },
    cardText: {
     fontSize:16,
     color:'#333',   

    }
})