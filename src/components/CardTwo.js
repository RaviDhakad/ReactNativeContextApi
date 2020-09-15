import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ThemeContext, themes } from '../theme/theme-context';
import { LangaugeContext, languages } from '../languages/LanguageContext'
export default class CardTwo extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    <LangaugeContext.Consumer>
                        {({ language, toggleLangauge }) => (
                            <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>TWO</Text>
                                <Text>{language.hello}</Text>
                            </View>
                        )}
                    </LangaugeContext.Consumer>
                )}
            </ThemeContext.Consumer>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
    }
});