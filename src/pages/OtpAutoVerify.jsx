// src/pages/OtpAutoVerify.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import { verifyOtp } from '../utils/otpService'

const OtpAutoVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(true)
  const [isManual, setIsManual] = useState(false)
  const [error, setError] = useState('')
  const [countdown, setCountdown] = useState(15)
  const { t } = useLanguage()
  const { phoneNumber, login } = useAuth()
  const navigate = useNavigate()
  const inputRefs = useRef([])

  useEffect(() => {
    // Simulate auto OTP detection
    const autoDetectOtp = setTimeout(() => {
      if (!isManual) {
        simulateAutoVerification()
      }
    }, 3000)

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setIsManual(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearTimeout(autoDetectOtp)
      clearInterval(timer)
    }
  }, [isManual])

  const simulateAutoVerification = async () => {
    try {
      const result = await verifyOtp(phoneNumber, '123456')
      if (result.success) {
        login(result.user)
        setTimeout(() => navigate('/select-category'), 1000)
      }
    } catch (err) {
      setError('Auto-verification failed')
      setIsManual(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus()
      }

      // Check if all digits are filled
      if (newOtp.every(digit => digit !== '') && index === 5) {
        handleManualSubmit(newOtp.join(''))
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleManualSubmit = async (manualOtp) => {
    setIsLoading(true)
    setError('')

    try {
      const result = await verifyOtp(phoneNumber, manualOtp)
      if (result.success) {
        login(result.user)
        setTimeout(() => navigate('/select-category'), 1000)
      } else {
        setError('Invalid OTP. Please try again.')
      }
    } catch (err) {
      setError('Verification failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const switchToManual = () => {
    setIsManual(true)
    setCountdown(0)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
      >
        <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <div className="w-12 h-12 bg-purple-500 rounded-full animate-pulse"></div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {t('verifyingOtp')}
        </h1>
        <p className="text-gray-600 mb-8">
          {phoneNumber ? `Sent to ******${phoneNumber.slice(-4)}` : ''}
        </p>

        <AnimatePresence mode="wait">
          {!isManual ? (
            <motion.div
              key="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-blue-700 font-medium">
                  Auto-detecting OTP... ({countdown}s)
                </p>
              </div>

              <button
                onClick={switchToManual}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Enter OTP manually
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="manual"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  Enter the 6-digit OTP sent to your phone
                </p>
                
                <div className="flex justify-center space-x-2">
                  {otp.map((digit, index) => (
                    <motion.input
                      key={index}
                      ref={(el) => inputRefs.current[index] = el}
                      type="tel"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200"
                      maxLength={1}
                      disabled={isLoading}
                    />
                  ))}
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4"
                >
                  <p className="text-red-700 text-sm">{error}</p>
                </motion.div>
              )}

              {isLoading && (
                <div className="w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default OtpAutoVerify