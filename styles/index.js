import { StyleSheet } from "react-native";

export const listViewStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: "100%"
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
    backgroundColor: "#000000",
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
    backgroundColor: "#333333",
    paddingVertical: 4,
    paddingHorizontal: 15
  },
  sectionHeaderText: {
    fontSize: 22,
    color: "#EEEEEE"
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
    backgroundColor: "#333333",
    width: "100%",
    flexDirection: "column",
    height: "100%",
    paddingVertical: 2
  },
  image: {
    width: "100%",
    height: 560,
    marginBottom: 2
  },
  title: {
    fontSize: 32,
    color: "#ffffff"
  }
});

export const vehicleScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  list: {
    width: "100%"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  }
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#000000",
    width: "100%",
    height: 65,
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 2
  },
  title: {
    color: "#EEEEEE",
    fontSize: 32
  }
});

export const listScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    color: "#EEEEEE"
  }
});
