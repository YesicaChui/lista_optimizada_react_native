import { View,Text, Button,StyleSheet } from "react-native"

const CardTarea = ({item,handlerDeleteModal}) => {
  return (
    <View style={styles.cardTarea}>
            <Text style={item.completado?styles.cardTitleTachado:styles.cardTitle}>{item.title}</Text>
            <Button color={"#fff"} title="❌" onPress={() => handlerDeleteModal(item)} />
            <Button color={"#fff"} title="✅" onPress={() => handlerDeleteModal(item)} />
          </View>
  )
}
const styles = StyleSheet.create({
  cardTarea: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 8,
  },
  cardTitle:{
    fontSize:12
  },
  cardTitleTachado:{
    textDecorationLine:"line-through"
  }
})
export default CardTarea