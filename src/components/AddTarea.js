import { View,TextInput,Button,StyleSheet,Pressable,Text} from "react-native"

const AddTarea = ({setNewTitleTarea,newTitleTarea,handlerAddTarea}) => {
  return (
    <View style={styles.inputContainer}>

    <TextInput placeholder="Nombre" style={styles.input}
      onChangeText={(texto) => setNewTitleTarea(texto)} value={newTitleTarea} />

    
    {/* <Button title="Agregar" onPress={handlerAddTarea} ></Button> */}
    <Pressable style={styles.botonInsertar} onPress={handlerAddTarea}>
      <Text style={styles.textBotonInsertar}>Insertar</Text>
    </Pressable>
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
  botonInsertar:{
    backgroundColor:"green",
    padding:15,
    borderRadius:20
  },
  textBotonInsertar:{
    color:"white",
    fontWeight:"700"
  }

 })
export default AddTarea