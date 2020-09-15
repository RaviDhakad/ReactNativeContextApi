import React from 'react';
import { ThemeContext, themes } from './src/theme/theme-context'
import { LangaugeContext, languages } from './src/languages/LanguageContext'
import MainNavigation from './src/MainNavigation'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = (item) => {
      console.log('TOGGLE CLICK ', item.label)
      if (item.label == 'red') {
        this.setState({ theme: themes.red })
      } else if (item.label == 'green') {
        this.setState({ theme: themes.green })
      } else if (item.label == 'light') {
        this.setState({ theme: themes.light })
      } else if (item.label == 'dark') {
        this.setState({ theme: themes.dark })
      }
    };

    this.toggleLangauge = (item) => {
      console.log('langToggle ', item)
      if (item.label == 'hindi') {
        this.setState({ language: languages.hindi })
      } else if (item.label == 'english') {
        this.setState({ language: languages.english })
      } else if (item.label == 'spanish') {
        this.setState({ language: languages.spanish })
      }
    }

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      language: languages.hindi,
      toggleLangauge: this.toggleLangauge,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <LangaugeContext.Provider value={this.state}>
          <MainNavigation />
        </LangaugeContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

