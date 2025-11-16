// src/pages/SelectCategory.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import { saveUserRole } from '../utils/otpService'
import { 
  FarmerIcon, 
  BuildingIcon, 
  ShoppingCartIcon, 
  BriefcaseIcon,
  FactoryIcon,
  UsersIcon,
  LeafIcon
} from '../components/Icons'

const SelectCategory = () => {
  const [selectedRole, setSelectedRole] = useState('farmer')
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()
  const { setUserRole } = useAuth()
  const navigate = useNavigate()

  const roles = [
    { 
      id: 'farmer', 
      label: t('farmer'), 
      icon: <FarmerIcon className="w-16 h-16" />, 
      color: 'from-green-500 to-emerald-600',
      path: '/farmer-dashboard',
      description: 'Sell crops, get insights & support'
    },
    { 
      id: 'fpo', 
      label: t('fpo'), 
      icon: <BuildingIcon className="w-16 h-16" />, 
      color: 'from-blue-500 to-cyan-600',
      path: '/fpos',
      description: 'Manage farmer groups & operations'
    },
    { 
      id: 'buyer', 
      label: t('buyer'), 
      icon: <ShoppingCartIcon className="w-16 h-16" />, 
      color: 'from-orange-500 to-amber-600',
      path: '/institutionalbuyers',
      description: 'Source quality produce directly'
    },
    { 
      id: 'investor', 
      label: t('investor'), 
      icon: <BriefcaseIcon className="w-16 h-16" />, 
      color: 'from-purple-500 to-indigo-600',
      path: '/inverster',
      description: 'Invest in agriculture projects'
    },
    { 
      id: 'carbon-buyer', 
      label: 'Carbon Credit Buyer', 
      icon: <LeafIcon className="w-16 h-16" />, 
      color: 'from-teal-500 to-green-600',
      path: '/carbon-credit',
      description: 'Purchase carbon credits from farmers'
    },
    { 
      id: 'institutional', 
      label: 'Institutional Buyer', 
      icon: <FactoryIcon className="w-16 h-16" />, 
      color: 'from-red-500 to-pink-600',
      path: '/institutionalbuyers',
      description: 'Bulk purchasing for institutions'
    }
  ]

  const handleRoleSelect = async (role) => {
    setSelectedRole(role.id)
    setIsLoading(true)

    try {
      await saveUserRole(role.id)
      setUserRole(role.id)
      setTimeout(() => {
        navigate(role.path)
      }, 1000)
    } catch (error) {
      console.error('Failed to save user role:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const cardVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.05, opacity: 1 },
    tap: { scale: 0.95 },
    selected: { scale: 1.02, opacity: 1 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 pt-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('selectRole') || 'Select Your Role'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to engage with our agricultural platform and access tailored features for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={selectedRole === role.id ? "selected" : "initial"}
              onClick={() => handleRoleSelect(role)}
              className={`relative cursor-pointer rounded-2xl p-1 bg-white shadow-lg ${
                selectedRole === role.id 
                  ? 'ring-3 ring-blue-500 ring-opacity-60 shadow-xl' 
                  : 'shadow-md hover:shadow-xl'
              } transition-all duration-300 border border-gray-100`}
            >
              <div className={`bg-gradient-to-br ${role.color} rounded-xl p-6 text-white h-56 flex flex-col items-center justify-center relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-black opacity-5"></div>
                </div>
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white mb-4 relative z-10"
                >
                  {role.icon}
                </motion.div>
                
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl font-semibold text-center mb-3 relative z-10"
                >
                  {role.label}
                </motion.h3>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-white text-opacity-90 text-center text-sm leading-relaxed relative z-10 px-2"
                >
                  {role.description}
                </motion.p>

                {selectedRole === role.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </motion.div>
                )}

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
                  whileHover={{ opacity: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Setting up your dashboard...</p>
            <p className="text-gray-500 text-sm mt-1">Redirecting to your personalized workspace</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>Your selection will customize your experience and available features</p>
        </motion.div>
      </div>
    </div>
  )
}

export default SelectCategory