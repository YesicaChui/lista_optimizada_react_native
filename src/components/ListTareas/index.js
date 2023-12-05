import { View, FlatList, Text, Button, StyleSheet } from "react-native"
import CardTarea from "./CardTarea"

const ListTareas = ({ tareas, handlerDeleteModal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tareas}
        keyExtractor={elemento => elemento.id}
        renderItem={({ item }) =>
          <CardTarea
          handlerDeleteModal={handlerDeleteModal}
          item={item}
          />
          }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  },
 
})

export default ListTareas