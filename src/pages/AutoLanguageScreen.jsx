// src/pages/AutoLanguageScreen.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { getUserLocation } from '../utils/location'

const AutoLanguageScreen = () => {
  const [isDetecting, setIsDetecting] = useState(true)
  const [detectedState, setDetectedState] = useState('')
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 })
  const [error, setError] = useState('')
  const { detectLanguageFromState, t, language, setLanguage } = useLanguage()
  const navigate = useNavigate()

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const location = await getUserLocation()
        setDetectedState(location.state)
        setCoordinates({ latitude: location.latitude, longitude: location.longitude })
        
        // Detect and set the language based on state
        const detectedLang = detectLanguageFromState(location.state)
        setLanguage(detectedLang)
        
        console.log('Location detection successful:', {
          state: location.state,
          coordinates: `${location.latitude}, ${location.longitude}`,
          language: detectedLang
        })
      } catch (err) {
        console.error('Location detection failed:', err)
        setError('Unable to detect your location. Using default language (English).')
        setDetectedState('Unknown')
      } finally {
        setIsDetecting(false)
      }
    }

    detectLocation()
  }, [detectLanguageFromState, setLanguage])

  const handleContinue = () => {
    navigate('/login')
  }

  const getLanguageName = (langCode) => {
    const languageNames = {
      'en': 'English',
      'hi': 'Hindi',
      'gu': 'Gujarati',
      'mr': 'Marathi',
      'ta': 'Tamil',
      'te': 'Telugu',
      'kn': 'Kannada',
      'pa': 'Punjabi',
      'ml': 'Malayalam',
      'bn': 'Bengali',
      'or': 'Odia',
      'as': 'Assamese'
    }
    return languageNames[langCode] || 'English'
  }

  if (isDetecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-amber-100">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-32 h-32 bg-green-500 rounded-full mx-auto mb-8 animate-pulse-slow"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('welcome')}</h2>
          <p className="text-lg text-gray-600">{t('detectingLocation')}</p>
          <p className="text-sm text-gray-500 mt-2">Please allow location access</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
      >
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <div className="w-16 h-16 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('welcome')}</h1>
        
        <div className="bg-green-50 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            {t('locationDetected')} 📍
          </h2>
          <p className="text-lg text-green-600 font-medium mb-2">
            {getLanguageName(language)}
          </p>
          <p className="text-sm text-green-700 mb-1">
            {t('basedOnLocation')} <strong>{detectedState}</strong>
          </p>
          <p className="text-xs text-green-600">
            Coordinates: {coordinates.latitude.toFixed(4)}, {coordinates.longitude.toFixed(4)}
          </p>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
            <p className="text-yellow-700 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinue}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-colors duration-200"
          >
            {t('continueInLanguage')} {getLanguageName(language)}
          </motion.button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full text-green-600 hover:text-green-700 font-medium py-2 rounded-2xl text-lg transition-colors duration-200 border border-green-200 hover:border-green-300"
          >
            {t('useDifferentLanguage')}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default AutoLanguageScreen