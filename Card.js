import { StyleSheet, Text, View } from 'react-native';

const Card = ({ combustivel, porcentagem }) => {

return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        Abasteça com: {combustivel}
      </Text>
      <Text style={styles.cardText}>
        O etanol está custando {porcentagem}% da gasolina.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
card: {
    width: '100',
    backgroundColor: '#a4abff',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#1b2a5b',
    textAlign: 'center',
  },
  });

export { Card };
