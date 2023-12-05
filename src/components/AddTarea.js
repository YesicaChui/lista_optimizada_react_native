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
    justifyContent: "space-around",
    marginHorizontal:7,
    gap:10
  },
  input: {
    flex:7,
    borderWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150,
    borderRadius:5,
    borderColor: "green"
  },
  botonInsertar:{
    flex:3,
    backgroundColor:"green",
    padding:15,
    borderRadius:20
  },
  textBotonInsertar:{
    color:"white",
    fontWeight:"700",
    textAlign:"center",
    fontSize: 15
    
  }

 })
export default AddTarea