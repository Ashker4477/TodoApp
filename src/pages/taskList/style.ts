import {StyleSheet} from 'react-native';
import {s, vs} from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeecf2',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: s(30),
    fontWeight: 'bold',
    color: '#000',
  },
  headingContainer: {
    height: s(120),
    justifyContent: 'center',
    paddingHorizontal: s(30),
    marginTop: vs(30),
  },
  img: {
    position: 'absolute',
    left: s(-30),
    top: vs(-45),
  },
  listContainer: {
    paddingHorizontal: s(30),
  },
  card: {
    height: vs(120),
    backgroundColor: '#fff',
    marginTop: vs(10),
    borderRadius: s(15),
    borderColor: '#fefefe',
    borderWidth: s(2),
    padding: s(15),
  },
  cardHead: {
    fontSize: s(18),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: vs(5),
  },
  cardText: {
    fontSize: s(13),
  },
  row: {flexDirection: 'row'},
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vs(10),
  },
  time: {
    color: '#9477eb',
  },
  timeImage: {width: s(15), marginRight: s(5)},
  done: {
    backgroundColor: '#d3f5ca',
    paddingHorizontal: s(12),
    paddingVertical: vs(6),
    borderRadius: s(15),
  },
  inProgress: {
    backgroundColor: '#f6ceb5',
    paddingHorizontal: s(12),
    paddingVertical: vs(6),
    borderRadius: s(12),
  },
  inProgressText: {
    color: '#e0895c',
  },
  margin20: {
    marginEnd: s(20),
  },
  mv20: {marginVertical: vs(20)},
});

export default styles;
