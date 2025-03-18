import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Simulação de dados
const livros = [
  { id: '1', titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' },
  { id: '2', titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis' },
  { id: '3', titulo: 'Capitães da Areia', autor: 'Jorge Amado' },
];

// Tela 1: Catálogo Digital
function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.titulo} - {item.autor}</Text>
        )}
      />
    </View>
  );
}

// Tela 2: Empréstimos e Devoluções
function EmprestimosScreen() {
  const handleEmprestimo = () => alert('Solicitação de empréstimo enviada!');
  const handleDevolucao = () => alert('Devolução registrada!');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empréstimos e Devoluções</Text>
      <Button title="Solicitar Empréstimo" onPress={handleEmprestimo} />
      <Button title="Registrar Devolução" onPress={handleDevolucao} style={styles.button} />
    </View>
  );
}

// Tela 3: Leituras Recomendadas
function RecomendacoesScreen() {
  const recomendacoes = ['1984 - George Orwell', 'O Senhor dos Anéis - J.R.R. Tolkien', 'A Revolução dos Bichos - George Orwell'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leituras Recomendadas</Text>
      <FlatList
        data={recomendacoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

// Tela 4: Notas e Anotações
function NotasScreen() {
  const [nota, setNota] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notas e Anotações</Text>
      <TextInput
        placeholder="Digite suas anotações aqui..."
        style={styles.input}
        value={nota}
        onChangeText={setNota}
      />
      <Button title="Salvar Nota" onPress={() => alert('Nota salva!')} />
    </View>
  );
}

// Tela 5: Clube de Leitura
function ClubeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clube de Leitura</Text>
      <Text>Participe de discussões em grupo sobre seus livros favoritos!</Text>
    </View>
  );
}

// Tela 6: Publicação e Compartilhamento
function PublicacaoScreen() {
  const handleCompartilhar = () => alert('Resenha compartilhada nas redes sociais!');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publicação e Compartilhamento</Text>
      <Button title="Compartilhar Resenha" onPress={handleCompartilhar} />
    </View>
  );
}

// Configuração de Navegação
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Catálogo" component={CatalogoScreen} />
        <Tab.Screen name="Empréstimos" component={EmprestimosScreen} />
        <Tab.Screen name="Recomendações" component={RecomendacoesScreen} />
        <Tab.Screen name="Notas" component={NotasScreen} />
        <Tab.Screen name="Clube de Leitura" component={ClubeScreen} />
        <Tab.Screen name="Compartilhar" component={PublicacaoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
