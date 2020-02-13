import { StyleSheet } from "react-native";

export const listViewStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000000"
  },
  item: {
    display: "flex",
    backgroundColor: "#ffffff",
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000000",
    shadowOffset: { x: -5, y: -5 },
    shadowOpacity: 50,
    shadowRadius: 2
  },
  header: {
    backgroundColor: "#333333",
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  headerText: {
    fontSize: 22,
    color: "#ffffff"
  },
  subHeaderText: {
    fontSize: 18,
    color: "#ffffff"
  },
  detailContainer: {
    padding: 20
  },
  detail: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: "justify"
  },
  sectionHeader: {
    backgroundColor: "#777777",
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  sectionHeaderText: {
    fontSize: 22,
    color: "#ffffff"
  }
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  headerContainer: {
    backgroundColor: "#000000",
    width: "100%",
    justifyContent: "center",
    padding: 10
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    flexDirection: "row",
    height: "100%",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 600,
    marginBottom: 16
  },
  title: {
    fontSize: 32,
    color: "#ffffff"
  }
});

export const listScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 32
  }
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    width: 110,
    height: 120,
    margin: 10,
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  title: {
    color: "#EEEEEE",
    fontSize: 20
  }
});
