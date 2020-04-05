
import { StyleSheet, Dimensions } from 'react-native';


const window = Dimensions.get("window");

export const styles = StyleSheet.create({
  maincontainer: {
    height: window.height,
    width: window.width,
    backgroundColor: 'white'
  },
  innerontainer: {
    height: window.height,
    width: window.width,
    padding: 15,
    borderRadius: 15
  },
  scroll: {
    padding: 10
  },
  card: {
    height: 100,
    width: '100%',
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 12,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 15
  },
  box: {
    borderRadius: 15,
    paddingLeft: 15
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'sans'
  },
  input: {
    justifyContent: 'flex-end',
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 12,
  },
  loading: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    padding: 10, 
    borderTopColor: "#eee", 
    borderTopWidth: 1 
  }
});