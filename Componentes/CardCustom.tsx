import { TouchableOpacity, Text } from "react-native";
function CustomCard(props:{ titulo:string, corFundo:string, onPress:()=>void }) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.card, { backgroundColor: props.corFundo }]}>
      <Text style={styles.cardText}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}
