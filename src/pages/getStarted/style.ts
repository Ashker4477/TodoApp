import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#754cf1",
      height: "75%",
      borderBottomLeftRadius: 100, // Adjust this value for the desired curve
      borderBottomRightRadius: 100, // Adjust this value for the desired curve
      overflow: 'hidden', // Hide content that overflows the curved border
    },
    image: {
      width: 370,
      height: 500,
    },
    dotImage:{
      position: "absolute",
      top: -40,
      left: 0,
    },
    secContainer: {
      height: "25%",
      backgroundColor: "#fff",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    secTextView: {
      width: 200
    },
    secText: {
      fontSize: 25,
      color: "#000",
      marginTop: 10,
      fontWeight: "800",
      textAlign: "center",
    },
    secButton: {
      backgroundColor: "#754cf1",
      borderRadius: 100,
      paddingHorizontal: 20,
      paddingVertical: 7,
    },
    secButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 35
    }
  });

  export default styles;