import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View, Button } from "react-native";
import { CounterStoreContext } from "../stores/CounterStore";

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working oon your app!</Text>
      <Button title="Add" onPress={() => counterStore.count++} />
      <Text>{counterStore.count}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
