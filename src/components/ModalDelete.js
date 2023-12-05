import { View, Modal, Text, Button, StyleSheet } from 'react-native'

const ModalDelete = ({ isVisible, handlerDeleteTarea, setIsVisible, tarea }) => {
 
  return (

    <Modal
      visible={isVisible}
      transparent={true}

    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Desea Eliminar la Tarea?</Text>
          <Text style={styles.modalText}>{tarea.title}</Text>
          <Button title="si" onPress={() => handlerDeleteTarea()} />
          <Button title="No" onPress={() => setIsVisible(false)} />
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create(
  {
    modalContainer: {
      
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"rgba(255,255,255,0.8)"
    },
    modalContent:{
      width: "80%",
      borderRadius:10,
      padding: 10,
      gap: 10,
      backgroundColor:"#00d26a",
      
    },
    modalText:{
      textAlign: "center",
      color: "#fff",
      fontWeight:"700",
      fontSize: 20
    },

  }
)
export default ModalDelete