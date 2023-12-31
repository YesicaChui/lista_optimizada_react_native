import { View, FlatList, Text, Button, StyleSheet } from "react-native"
import CardTarea from "./CardTarea"

const ListTareas = ({ tareas, handlerDeleteModal,handlerCompletarTarea }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tareas}
        keyExtractor={elemento => elemento.id}
        renderItem={({ item }) =>
          <CardTarea
          handlerDeleteModal={handlerDeleteModal}
          item={item}
          handlerCompletarTarea={handlerCompletarTarea}
          />
          }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginBottom:100
  },
 
})

export default ListTareas