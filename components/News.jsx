import { StyleSheet, Text, View, Image } from "react-native";

const News = ({ author, urlToImage, publishedAt, title, description }) => {
  return (
    <View style={styles.Container}>
      <View>
        <Image
          style={styles.Imagestyle}
          source={{
            uri: urlToImage,
          }}
        />
      </View>
      <View>
        <Text style={styles.Title}>{title}</Text>
        <View style={styles.By}>
          <Text style={styles.otherTxt}>By: {author}</Text>
          <Text style={styles.otherTxt}>
            {new Date(publishedAt).toDateString()}
          </Text>
        </View>
        <Text>{`${description.substring(0, 200)}..`}</Text>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    gap: 20,
    padding: 10,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: "#171717",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
  },
  Imagestyle: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  By: {
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Title: {
    fontWeight: "bold",
  },
  otherTxt: {
    color: "#ff0000",
  },
});
