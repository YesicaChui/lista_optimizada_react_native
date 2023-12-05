import { View,TextInput,Button,StyleSheet} from "react-native"

const AddProduct = ({setNewTitleProduct,newTitleProduct,handlerAddProduct}) => {
  return (
    <View style={styles.inputContainer}>

    <TextInput placeholder="Nombre" style={styles.input}
      onChangeText={(texto) => setNewTitleProduct(texto)} value={newTitleProduct} />

    
    <Button title="ADD" onPress={handlerAddProduct} ></Button>

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
export default AddProduct