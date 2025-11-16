// src/pages/MobileLogin.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import { sendOtp } from '../utils/otpService'

const MobileLogin = () => {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { t } = useLanguage()
  const { setPhoneNumber } = useAuth()
  const navigate = useNavigate()

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10)
    setPhone(value)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      await sendOtp(phone)
      setPhoneNumber(phone)
      navigate('/verify-otp')
    } catch (err) {
      setError('Failed to send OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t('enterMobile')}
          </h1>
          <p className="text-gray-600">
            We'll send you a verification code
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder={t('mobilePlaceholder')}
              className="w-full px-6 py-4 text-2xl text-center border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200"
              maxLength={10}
              disabled={isLoading}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 rounded-xl p-4"
            >
              <p className="text-red-700 text-sm text-center">{error}</p>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading || phone.length !== 10}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              t('sendOtp')
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our Terms of Service
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileLogin