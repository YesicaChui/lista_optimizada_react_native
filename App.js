import { useState } from "react"
import { StyleSheet, Text, View,  Button,  FlatList } from "react-native"
import uuid from 'react-native-uuid';
import ModalDelete from "./src/components/ModalDelete";
import AddProduct from "./src/components/AddProduct";
import ListProducts from "./src/components/ListProducts";
//import { styles } from "./styleApp"
const App = () => {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const handlerDeleteModal = (item)=>{
    console.log(item)
    setIsVisible(true)
    setProductSelected(item)
  }

  const handlerDeleteProduct = ()=>{
    console.log("vamos a borrar")
    setProducts(products.filter(elemento => elemento.id != productSelected.id))
    setIsVisible(false)
  }
  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
     
    }
    setProducts(c => [...c, newProduct])
    setNewTitleProduct("")
    
  }
  return (
    <View style={styles.container}>
     <Text style={styles.titulo}>Lista de Tareas</Text>
      <AddProduct 
      setNewTitleProduct = {setNewTitleProduct}
      newTitleProduct = {newTitleProduct}
      handlerAddProduct = {handlerAddProduct}
      />
      
      <ModalDelete 
        producto = {productSelected} 
        isVisible = {isVisible}  
        handlerDeleteProduct = {handlerDeleteProduct} 
        setIsVisible = {setIsVisible}
      />
<ListProducts handlerDeleteModal={handlerDeleteModal} products={products}/>
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
    titulo:{
      color:"green",
      fontSize:30,
      fontWeight:"700",
      marginBottom:15
    }
  }
)
export default App
