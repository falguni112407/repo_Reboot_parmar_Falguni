// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'
import { getLanguageFromState, translations } from '../utils/languageMap'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const [detectedState, setDetectedState] = useState('')

  const detectLanguageFromState = (state) => {
    const lang = getLanguageFromState(state)
    setDetectedState(state)
    // Don't set the language immediately, just return it
    return lang
  }

  const setAppLanguage = (lang) => {
    setLanguage(lang)
  }

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const value = {
    language,
    setLanguage: setAppLanguage,
    detectedState,
    detectLanguageFromState,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}   