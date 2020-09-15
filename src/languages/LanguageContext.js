// import React ,{createContext} from 'react'
import React from 'react';
export const languages = {
  english: {
    "hello": "Hello"
  },
  hindi: {
    "hello": "हैलो"
  },
  spanish: {
    "hello": "Hola"
  },
};


export const LangaugeContext = React.createContext({
  language: languages.hindi,
  toggleLangauge: () => { },
});

// import React, { useState, useEffect, useContext } from 'react';
// import en from '../languages/en.json';
// import hi from '../languages/hi.json';
// import * as RNLocalize from 'react-native-localize';
// import Card from '../components/Card'
// const LanguageContext = React.createContext({});
// const languageObj = {
//    'hi': hi,
//     en: en,
// };
// export const LanguageContextProvider = ({ children }) => {
//     const [selectedLanguage, setSelectedLanguage] = useState('en');
//     useEffect(() => {
//         const currentLanguage = RNLocalize.findBestAvailableLanguage(Object.keys(languageObj));
//         setSelectedLanguage('hi');
//     }, []);
//     const value = Object.assign({}, languageObj[selectedLanguage]);
//     console.log('value ',selectedLanguage)
//     return (

//         <LanguageContext.Provider value={value}>
//           <Card />
//         </LanguageContext.Provider>
//       );
// };
// export const useTranslation = () => useContext(LanguageContext);
