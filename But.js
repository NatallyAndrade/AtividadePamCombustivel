
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const But = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
button: {
    backgroundColor: '#da0505',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 25,
    width: '75',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  buttonText: {
    color: '#c8c4e8',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export { But };