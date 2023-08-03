import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import News from "../components/News";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [news, setnews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=f8f710d32e374f64bc9855df4cd4300f",
          {
            params: {
              category: "technology",
            },
          }
        );
        setnews(response?.data?.articles);

        setLoading(false);
      } catch (error) {}
    };

    fetchNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return <News {...item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
