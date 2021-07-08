import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../src/assets/images/avatar.jpg')}
      />
      <Text style={styles.name}>Nicolas Theodoro Lopes</Text>
      <Text style={styles.city}>Teresópolis - RJ</Text>
      <ScrollView>
        <Text style={styles.description}>
          Olá! Me chamo Nicolas Theodoro Lopes! Sou uma pessoa curiosa, gosto de
          trabalhar com pessoas, e se tem algo que me motiva são novos desafios.
          Grande entusiasta das comunidades de tecnologia e do mundo open
          source, meu objetivo é compartilhar conhecimento, aprender e ensinar é
          a base de tudo. Esse é o principal motivo que me fez mergulhar de
          cabeça nesse mundo. Formado em Análise e Desenvolvimento de Sistemas,
          busco uma colocação no mercado de tecnologia. Minhas principais
          competências e projetos estão ligados ao Desenvolvimento Web, área na
          qual estou imergido. Busco crescer como profissional e como ser
          humano.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "black",
    
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 50,
  },
  name: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 20,
    color: "white",
  },
  city: {
    marginTop: 30,
    fontWeight: '500',
    fontSize: 20,
    color: "white",
  },
  description: {
    fontSize: 22,
    marginTop: 30,
    textAlign: 'justify',
    padding: 10,
    color: "white",
  },
});

export default App;
