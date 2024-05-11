import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'; // Importa react-native-get-random-values antes de uuid

export default function Formulario(props) {
  const [input, setInput] = useState('');

  const manejarCambio = (texto) => {
    setInput(texto);
  };

  const manejarEnvio = () => {
    if (input.trim()) {
      const tareaNueva = {
        id: uuidv4(),
        texto: input,
        completada: false,
      };
      props.onSubmit(tareaNueva);
      setInput('');
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>App de tareas</Text>
      <View style={styles.contenedorForm}>
        <TextInput
          placeholder='Ingresa la tarea'
          style={styles.textInput}
          onChangeText={manejarCambio}
          value={input}
        />
        <TouchableOpacity style={styles.boton} onPress={manejarEnvio}>
          <Text style={styles.textoBoton}>Añadir tarea</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    marginTop: 40,
  },
  titulo: {
    fontSize: 40,
    color: '#dc34f3',
    fontWeight: 'bold',
  },
  contenedorForm: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#dc34f3',
    flex: 3,
    height: 50,
    padding: 10,
    fontSize: 17,
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flex: 1,
    borderColor: '#dc34f3',
    backgroundColor: '#dc34f3',
    marginLeft: 10,
    height: 50,
  },
  textoBoton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
