import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from './theme-context';
import { LangaugeContext } from '../languages/LanguageContext'
import DropDownPicker from 'react-native-dropdown-picker';

function ThemeTogglerButton(props) {
  let ar = [
    { label: 'red', value: 'red', },
    { label: 'green', value: 'green', },
    { label: 'light', value: 'light', },
    { label: 'dark', value: 'dark', },
  ]

  let languageArray = [
    { label: 'english', value: 'english', },
    { label: 'hindi', value: 'hindi', },
    { label: 'spanish', value: 'spanish', },

  ]
  const [themArray, setThemeArray] = useState(ar);
  const [langArray, setLangArray] = useState(languageArray);

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (

        <LangaugeContext.Consumer>
          {({ language, toggleLangauge }) => (

            <View style={{ marginTop: 90, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={toggleTheme}>
                <Text style={{ backgroundColor: theme.background, color: 'red' }}>Toggle Theme11</Text>
              </TouchableOpacity>
              <DropDownPicker
                items={themArray}
                containerStyle={{ height: 40, width: '75%', marginTop: 20 }}
                controller={instance => this.controller = instance}
                onChangeItem={toggleTheme} />

              <Text style={{ backgroundColor: theme.background, color: 'red', marginTop: 50 }}>{language.hello}</Text>

              <DropDownPicker
                items={langArray}
                containerStyle={{ height: 40, width: '75%', marginTop: 60 }}
                controller={instance => this.controller = instance}
                onChangeItem={toggleLangauge} />

              <TouchableOpacity onPress={() => props.navigation.navigate('CardTwo')}><Text style={{ fontSize: 20, color: 'red', alignSelf: 'center', marginTop: 50 }}>Next</Text></TouchableOpacity>

            </View>

          )}</LangaugeContext.Consumer>

      )}</ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;