import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    // Llama a la función de búsqueda pasando el texto actual
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.TextInput}
        onChangeText={handleSearch}
        placeholder="Buscar.."
      />
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  TextInput: {
    width: "80%",
  },
});
