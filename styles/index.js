import { StyleSheet } from "react-native";

export const listViewStyles = StyleSheet.create({
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 16
  },
  title: {
    fontSize: 32
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
