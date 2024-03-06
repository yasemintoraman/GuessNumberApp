import { Text, StyleSheet, View } from 'react-native';
import Title from '../components/Title';

function GuessScreen() {
    return(
        <View style={styles.screen}> 
        <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
    );
}

export default GuessScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});