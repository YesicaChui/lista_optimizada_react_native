import { View,TextInput,Button,StyleSheet} from "react-native"

const AddTarea = ({setNewTitleTarea,newTitleTarea,handlerAddTarea}) => {
  return (
    <View style={styles.inputContainer}>

    <TextInput placeholder="Nombre" style={styles.input}
      onChangeText={(texto) => setNewTitleTarea(texto)} value={newTitleTarea} />

    
    <Button title="Agregar" onPress={handlerAddTarea} ></Button>

  </View>

  )
}
 const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  input: {
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150
  },

 })
export default AddTarea