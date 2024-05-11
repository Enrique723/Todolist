import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <TouchableOpacity
      style={[styles.contenedor, completada ? styles.completada : null]}
      onPress={() => completarTarea(id)}
    >
      <View style={styles.contenido}>
        <Text numberOfLines={1} style={[styles.texto, completada ? styles.textocomp: null]}>{texto}</Text>
      </View>
      <TouchableOpacity style={styles.icono} onPress={() => eliminarTarea(id)}>
        <MaterialIcons name='delete' size={30} color='#fff' />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc34f3',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  completada: {
    backgroundColor: '#5a01a7',
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    margin:3
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    flex: 1,
    flexWrap: 'wrap',
  },
  textocomp:{
    textDecorationLine:'line-through'
  },

  icono: {
    backgroundColor: '#dc34f3',
    borderRadius: 15,
    padding: 5,
  },
});
