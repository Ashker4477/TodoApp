import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#754cf1",
  },
  imageContainer: {
    backgroundColor: "#754cf1",
    zIndex: 10,
    alignItems: "center"
  },
  image: {
    zIndex: 12,
    position:"relative",
    top: 85,
  },
  parabla: { position: "relative", top: -391 },
  dotImage: {
    position: "absolute",
    top: -10,
    left: 0,
    zIndex: 11
  },
  secContainer: {
    position: "absolute",
    bottom: 50,
    left: "22%",
    justifyContent: "center",
    alignItems: "center",
  },
  secTextView: {
    width: 200
  },
  secText: {
    fontSize: 25,
    color: "#000",
    marginVertical: 10,
    fontWeight: "800",
    textAlign: "center",
  },
  secButton: {
    backgroundColor: "#3e2b77",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  secButtonText: {
    color: "#fff",
    fontSize: 35,
  }
});

export default styles;