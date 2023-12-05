import { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList } from "react-native"
import uuid from 'react-native-uuid';
import ModalDelete from "./src/components/ModalDelete";

import ListTareas from "./src/components/ListTareas";
import AddTarea from "./src/components/AddTarea.js";
//import { styles } from "./styleApp"
const App = () => {

  const [newTitleTarea, setNewTitleTarea] = useState("")

  const [tareas, setTareas] = useState([])
  const [tareaSelected, setTareaSelected] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const handlerDeleteModal = (item) => {
    console.log(item)
    setIsVisible(true)
    setTareaSelected(item)
  }

  const handlerDeleteTarea = () => {
    console.log("vamos a borrar")
    setTareas(tareas.filter(elemento => elemento.id != tareaSelected.id))
    setIsVisible(false)
  }
  const handlerCompletarTarea = (elementoSeleccionado)=>{

  }
  const handlerAddTarea = () => {
    const newTarea = {
      id: uuid.v4(),
      title: newTitleTarea,
      completado: false,
    }
    setTareas(c => [...c, newTarea])
    setNewTitleTarea("")

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      <AddTarea
        setNewTitleTarea={setNewTitleTarea}
        newTitleTarea={newTitleTarea}
        handlerAddTarea={handlerAddTarea}
      />

      <ModalDelete
        tarea={tareaSelected}
        isVisible={isVisible}
        handlerDeleteTarea={handlerDeleteTarea}
        setIsVisible={setIsVisible}
      />
      <ListTareas handlerDeleteModal={handlerDeleteModal} tareas={tareas} />
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "start",
      alignItems: "center",
      marginTop: 80,
    },


    image: {
      alignSelf: "center",
      width: 200,
      height: 200,
      borderRadius: 10, // Ejemplo de aplicar un borde redondeado
    },
    titulo: {
      color: "green",
      fontSize: 30,
      fontWeight: "700",
      marginBottom: 15
    }
  }
)
export default App
