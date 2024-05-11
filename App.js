import {View, StyleSheet} from 'react-native'
import ListaTarea from './Componentes/Listatarea'
import Tarea from './Componentes/Tarea'

export default function App (){
  return(
   <View style={styles.contenedor}>
    <ListaTarea />
   </View>
  );
}

const styles = StyleSheet.create({
    contenedor:{
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
});