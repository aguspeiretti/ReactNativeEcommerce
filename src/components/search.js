import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { AntDesign, Entypo ,FontAwesome} from "@expo/vector-icons";
import logo from "../../assets/images/logo.png"

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    // Llama a la función de búsqueda pasando el texto actual
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
     <View style={styles.logoContainer}>
     <Image
        style={styles.imageLogo}
        resizeMode="cover"
        source={logo}
        
      />
     </View>
   <View style={styles.inputContainer}>
   <TextInput
        style={styles.TextInput}
        onChangeText={handleSearch}
        placeholder="Buscar.."
      >
         <AntDesign name="search1" size={24} color="black" />
      </TextInput>
   </View>
      <View style={styles.userContainer}>
        <FontAwesome name="user-circle-o" size={35} color='#A9A9A9' />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#fff",
    height:70,
    borderRadius:10,
    width:"98%",
    paddingHorizontal:10,
    alignItems:"center",
    justifyContent:"space-between"


  },
  TextInput: {
    width: "90%",
    height:40,
    backgroundColor:"#fff",
    borderWidth: 1, 
    borderColor: '#A9A9A9', 
    borderRadius:20,
    paddingHorizontal:10
  },
  logoContainer:{
   width:"15%",
   height:'100%',
   justifyContent:"center",
   alignItems:"center"
  },
  imageLogo:{
  width:"100%",
  height:"100%"
  },
  userContainer:{
    width:"15%",
    height:'100%',
    justifyContent:"center",
    alignItems:"center"
   },
   inputContainer:{
    width:"68%",
    height:'100%',
    justifyContent:"center",
    alignItems:"center",
    
   }
});
