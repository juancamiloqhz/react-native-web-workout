import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsxdsadf to start working on your app!</Text>
      <Button title="Add" onPress={() => setCount(d => d + 1)} />
      <Text>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;
