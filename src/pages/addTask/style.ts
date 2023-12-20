import {StyleSheet} from 'react-native';
import {s, vs} from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange the inputs horizontally
    justifyContent: 'space-between', // Create space between inputs
    marginTop: vs(15),
  },
  inputContainer: {
    flex: s(1), // Allow inputs to share the available space equally
  },
  dot: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    right: s(0),
    top: vs(0),
    zIndex: s(10),
  },
  img: {
    zIndex: s(11),
    width: s(300),
    height: vs(380),
    marginTop: s(9),
  },
  bg: {
    backgroundColor: '#eecf2',
    flex: s(1),
  },
  pencil: {
    backgroundColor: '#eecf2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mT15: {marginTop: vs(15)},
  mH24: {marginHorizontal: s(24)},
  buttonContainer: {
    marginVertical: vs(25),
  },
  row: {
    flex: s(1),
    flexDirection: 'row',
  },
});

export default styles;
