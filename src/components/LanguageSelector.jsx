// src/components/LanguageSelector.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50"
    >
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.native} ({lang.name})
          </option>
        ))}
      </select>
    </motion.div>
  )
}

export default LanguageSelector