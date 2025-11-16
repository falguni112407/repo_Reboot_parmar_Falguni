// src/utils/otpService.js
export const sendOtp = (phone) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`OTP sent to ${phone}`)
      resolve({ success: true, message: 'OTP sent successfully' })
    }, 1500)
  })
}

export const verifyOtp = (phone, otp) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isValid = otp === '123456' // Mock valid OTP
      if (isValid) {
        resolve({ success: true, user: { phone, id: Date.now().toString() } })
      } else {
        resolve({ success: false, error: 'Invalid OTP' })
      }
    }, 2000)
  })
}

export const saveUserRole = (role) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`User role saved: ${role}`)
      resolve({ success: true })
    }, 1000)
  })
}