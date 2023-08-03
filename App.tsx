import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() !== "") {
      setItems([...items, { key: String(items.length), text: text }]);
      setText("");
    } else {
      alert("Campo vazio.");
    }
  };

  const removeItem = (key: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de afazeres</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Digite aqui"
        onSubmitEditing={addItem}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity style={styles.buttonDelete} onPress={() => removeItem(item.key)}>
              <Text style={styles.buttonDeleteText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#00d7fc",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  buttonDelete: {
    backgroundColor: "#ff3b3b",
    padding: 5,
    borderRadius: 5,
  },
  buttonDeleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
