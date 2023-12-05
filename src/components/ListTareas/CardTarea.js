import { View, Text, Button, StyleSheet } from "react-native"

const CardTarea = ({ item, handlerDeleteModal, handlerCompletarTarea }) => {
  return (
    <View style={styles.cardTarea}>
      <View style={styles.cardBoxText}>
        <Text style={item.completado ? styles.cardTitleTachado : styles.cardTitle}>{item.title}</Text>
      </View>
      <View style={styles.cardBoxButtons}>
        <Button color={"#fff"} title="❌" onPress={() => handlerDeleteModal(item)} />
        <Button color={"#fff"} title="✅" onPress={() => handlerCompletarTarea(item)} />
      </View>
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
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 8,

  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "500",


  },
  cardTitleTachado: {
    textDecorationLine: "line-through",
    fontSize: 20,
    fontWeight: "500",
    textDecorationColor: "green",
    borderBottomWidth: 2,
    borderBottomColor: "green"
  },
  cardBoxText:{
    flex:3
  },
  cardBoxButtons:{
    flex:1,
    gap:8
  }
})
export default CardTarea