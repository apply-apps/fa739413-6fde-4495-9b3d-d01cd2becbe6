// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    const tales = [
        { id: '1', title: 'The Tortoise and the Hare', content: 'Once upon a time, a tortoise and a hare had a race...' },
        { id: '2', title: 'The Lion and the Mouse', content: 'A lion was once sleeping in the jungle when a mouse...' },
        { id: '3', title: 'The Boy Who Cried Wolf', content: 'There was once a boy who kept crying "wolf" to trick the villagers...' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select a Tale</Text>
            {tales.map((tale) => (
                <TouchableOpacity
                    key={tale.id}
                    style={styles.button}
                    onPress={() => navigation.navigate('Tale', { title: tale.title, content: tale.content })}
                >
                    <Text style={styles.buttonText}>{tale.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const { content } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.content}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
    },
    scrollView: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    content: {
        fontSize: 18,
        lineHeight: 26,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={({ route }) => ({ title: route.params.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}