import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import News from "../components/News";
import axios from "axios";

const Search = () => {
  const [searchInput, setsearchInput] = useState("");
  const [results, setresults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f8f710d32e374f64bc9855df4cd4300f",
        {
          params: {
            category: "technology",
            q: searchInput,
          },
        }
      );

      setresults(response?.data?.articles);

      setLoading(false);
    } catch (error) {}
  };
  return (
    <View style={styles.contaner}>
      <TextInput
        style={[styles.textinput]}
        placeholder="search"
        value={searchInput}
        onChangeText={(text) => setsearchInput(text)}
      />
      <TouchableOpacity style={styles.btn} title="Search" onPress={fetchNews}>
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>

      {results.length === 0 ? (
        <Text style={{ alignSelf: "center", fontSize: 30 }}>
          404..Data not found
        </Text>
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => {
            return <News {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  contaner: { flex: 1 },
  textinput: {
    width: "95%",
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  btn: {
    height: 30,
    width: 100,
    backgroundColor: "#000",
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
  },
});
