import React, { useState } from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import Formulario from './Formulario';
import Tarea from './Tarea';

export default function ListaTarea() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  const completarTarea = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  return (
    <View style={styles.contenedor}>
      <Formulario onSubmit={agregarTarea} />
      <ScrollView style={styles.listaTareas}>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  listaTareas: {
    marginTop: 20,
    paddingHorizontal: 3,
  },
});
