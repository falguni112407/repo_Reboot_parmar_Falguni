// src/utils/languageMap.js
export const getLanguageFromState = (state) => {
  const stateLanguageMap = {
    // Hindi speaking states
    'Uttar Pradesh': 'hi',
    'Bihar': 'hi',
    'Madhya Pradesh': 'hi',
    'Rajasthan': 'hi',
    'Haryana': 'hi',
    'Himachal Pradesh': 'hi',
    'Uttarakhand': 'hi',
    'Jharkhand': 'hi',
    'Chhattisgarh': 'hi',
    'Delhi': 'hi',
    
    // Gujarati
    'Gujarat': 'gu',
    
    // Marathi
    'Maharashtra': 'mr',
    
    // Punjabi
    'Punjab': 'pa',
    
    // Tamil
    'Tamil Nadu': 'ta',
    
    // Telugu
    'Andhra Pradesh': 'te',
    'Telangana': 'te',
    
    // Kannada
    'Karnataka': 'kn',
    
    // Malayalam
    'Kerala': 'ml',
    
    // Bengali
    'West Bengal': 'bn',
    
    // Odia
    'Odisha': 'or',
    
    // Assamese
    'Assam': 'as'
  };
  
  return stateLanguageMap[state] || 'en';
}

export const translations = {
  en: {
    welcome: 'Welcome',
    languageDetected: 'Language detected',
    continue: 'Continue',
    enterMobile: 'Enter your mobile number',
    mobilePlaceholder: '10-digit mobile number',
    sendOtp: 'Send OTP',
    verifyingOtp: 'Verifying OTP...',
    otpSuccess: 'OTP verified successfully!',
    selectRole: 'Select your role',
    farmer: 'Farmer',
    fpo: 'FPO',
    buyer: 'Buyer',
    investor: 'Investor',
    dashboard: 'Dashboard',
    welcomeToApp: 'Welcome to Krishi Mitra',
    detectingLocation: 'Detecting your location...',
    locationDetected: 'Location detected',
    basedOnLocation: 'Based on your location in',
    useDifferentLanguage: 'Use different language',
    continueInLanguage: 'Continue in'
  },
  hi: {
    welcome: 'स्वागत है',
    languageDetected: 'भाषा का पता चला',
    continue: 'जारी रखें',
    enterMobile: 'अपना मोबाइल नंबर दर्ज करें',
    mobilePlaceholder: '10-अंकीय मोबाइल नंबर',
    sendOtp: 'OTP भेजें',
    verifyingOtp: 'OTP सत्यापित किया जा रहा है...',
    otpSuccess: 'OTP सफलतापूर्वक सत्यापित!',
    selectRole: 'अपनी भूमिका चुनें',
    farmer: 'किसान',
    fpo: 'एफपीओ',
    buyer: 'खरीदार',
    investor: 'निवेशक',
    dashboard: 'डैशबोर्ड',
    welcomeToApp: 'कृषि मित्र में आपका स्वागत है',
    detectingLocation: 'आपका स्थान पता लगाया जा रहा है...',
    locationDetected: 'स्थान का पता चला',
    basedOnLocation: 'आपके स्थान के आधार पर',
    useDifferentLanguage: 'अलग भाषा का उपयोग करें',
    continueInLanguage: 'इस भाषा में जारी रखें'
  },
  gu: {
    welcome: 'સ્વાગત છે',
    languageDetected: 'ભાષા શોધી કાઢી',
    continue: 'ચાલુ રાખો',
    enterMobile: 'તમારો મોબાઈલ નંબર દાખલ કરો',
    mobilePlaceholder: '10-અંકનો મોબાઈલ નંબર',
    sendOtp: 'OTP મોકલો',
    verifyingOtp: 'OTP ચકાસવામાં આવી રહ્યું છે...',
    otpSuccess: 'OTP સફળતાપૂર્વક ચકાસાયું!',
    selectRole: 'તમારી ભૂમિકા પસંદ કરો',
    farmer: 'ખેડૂત',
    fpo: 'FPO',
    buyer: 'ખરીદનાર',
    investor: 'નિવેશક',
    dashboard: 'ડેશબોર્ડ',
    welcomeToApp: 'કૃષિ મિત્રમાં આપનું સ્વાગત છે',
    detectingLocation: 'તમારું સ્થાન શોધાઈ રહ્યું છે...',
    locationDetected: 'સ્થાન શોધાઈ ગયું',
    basedOnLocation: 'તમારા સ્થાનના આધારે',
    useDifferentLanguage: 'અલગ ભાષા વાપરો',
    continueInLanguage: 'આ ભાષામાં ચાલુ રાખો'
  },
  mr: {
    welcome: 'स्वागत आहे',
    languageDetected: 'भाषा शोधली',
    continue: 'सुरू ठेवा',
    enterMobile: 'आपला मोबाइल नंबर प्रविष्ट करा',
    mobilePlaceholder: '10-अंकी मोबाइल नंबर',
    sendOtp: 'OTP पाठवा',
    verifyingOtp: 'OTP सत्यापित केले जात आहे...',
    otpSuccess: 'OTP यशस्वीरित्या सत्यापित!',
    selectRole: 'आपली भूमिका निवडा',
    farmer: 'शेतकरी',
    fpo: 'FPO',
    buyer: 'खरेदीदार',
    investor: 'गुंतवणूकदार',
    dashboard: 'डॅशबोर्ड',
    welcomeToApp: 'कृषी मित्र मध्ये आपले स्वागत आहे',
    detectingLocation: 'आपले स्थान शोधले जात आहे...',
    locationDetected: 'स्थान शोधले',
    basedOnLocation: 'आपल्या स्थानावर आधारित',
    useDifferentLanguage: 'वेगळी भाषा वापरा',
    continueInLanguage: 'या भाषेत सुरू ठेवा'
  },
  ta: {
    welcome: 'வரவேற்கிறோம்',
    languageDetected: 'மொழி கண்டறியப்பட்டது',
    continue: 'தொடரவும்',
    enterMobile: 'உங்கள் மொபைல் எண்ணை உள்ளிடவும்',
    mobilePlaceholder: '10-இலக்க மொபைல் எண்',
    sendOtp: 'OTP அனுப்பவும்',
    verifyingOtp: 'OTP சரிபார்க்கப்படுகிறது...',
    otpSuccess: 'OTP வெற்றிகரமாக சரிபார்க்கப்பட்டது!',
    selectRole: 'உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்',
    farmer: 'விவசாயி',
    fpo: 'FPO',
    buyer: 'வாங்குபவர்',
    investor: 'முதலீட்டாளர்',
    dashboard: 'டாஷ்போர்டு',
    welcomeToApp: 'கிருஷி மித்ராவிற்கு வரவேற்கிறோம்',
    detectingLocation: 'உங்கள் இடம் கண்டறியப்படுகிறது...',
    locationDetected: 'இடம் கண்டறியப்பட்டது',
    basedOnLocation: 'உங்கள் இடத்தின் அடிப்படையில்',
    useDifferentLanguage: 'வேறு மொழியைப் பயன்படுத்தவும்',
    continueInLanguage: 'இந்த மொழியில் தொடரவும்'
  },
  te: {
    welcome: 'స్వాగతం',
    languageDetected: 'భాష గుర్తించబడింది',
    continue: 'కొనసాగించు',
    enterMobile: 'మీ మొబైల్ నంబర్ నమోదు చేయండి',
    mobilePlaceholder: '10-అంకెల మొబైల్ నంబర్',
    sendOtp: 'OTP పంపండి',
    verifyingOtp: 'OTP ధృవీకరించబడుతోంది...',
    otpSuccess: 'OTP విజయవంతంగా ధృవీకరించబడింది!',
    selectRole: 'మీ పాత్రను ఎంచుకోండి',
    farmer: 'రైతు',
    fpo: 'FPO',
    buyer: 'కొనుగోలుదారు',
    investor: 'నివేశిక',
    dashboard: 'డాష్బోర్డ్',
    welcomeToApp: 'కృషి మిత్రానికి స్వాగతం',
    detectingLocation: 'మీ స్థానం గుర్తించబడుతోంది...',
    locationDetected: 'స్థానం గుర్తించబడింది',
    basedOnLocation: 'మీ స్థానం ఆధారంగా',
    useDifferentLanguage: 'వేరే భాషను ఉపయోగించండి',
    continueInLanguage: 'ఈ భాషలో కొనసాగించు'
  },
  kn: {
    welcome: 'ಸ್ವಾಗತ',
    languageDetected: 'ಭಾಷೆ ಪತ್ತೆಯಾಗಿದೆ',
    continue: 'ಮುಂದುವರಿಸಿ',
    enterMobile: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ನಂಬರ್ ನಮೂದಿಸಿ',
    mobilePlaceholder: '10-ಅಂಕಿಯ ಮೊಬೈಲ್ ನಂಬರ್',
    sendOtp: 'OTP ಕಳುಹಿಸಿ',
    verifyingOtp: 'OTP ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    otpSuccess: 'OTP ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ!',
    selectRole: 'ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    farmer: 'ರೈತ',
    fpo: 'FPO',
    buyer: 'ಖರೀದಿದಾರ',
    investor: 'ಹೂಡಿಕೆದಾರ',
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    welcomeToApp: 'ಕೃಷಿ ಮಿತ್ರಕ್ಕೆ ಸ್ವಾಗತ',
    detectingLocation: 'ನಿಮ್ಮ ಸ್ಥಳ ಪತ್ತೆಯಾಗುತ್ತಿದೆ...',
    locationDetected: 'ಸ್ಥಳ ಪತ್ತೆಯಾಗಿದೆ',
    basedOnLocation: 'ನಿಮ್ಮ ಸ್ಥಳದ ಆಧಾರದ ಮೇಲೆ',
    useDifferentLanguage: 'ವಿಭಿನ್ನ ಭಾಷೆಯನ್ನು ಬಳಸಿ',
    continueInLanguage: 'ಈ ಭಾಷೆಯಲ್ಲಿ ಮುಂದುವರಿಸಿ'
  },
  pa: {
    welcome: 'ਜੀ ਆਇਆਂ ਨੂੰ',
    languageDetected: 'ਭਾਸ਼ਾ ਦਾ ਪਤਾ ਲੱਗ ਗਿਆ',
    continue: 'ਜਾਰੀ ਰੱਖੋ',
    enterMobile: 'ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    mobilePlaceholder: '10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ',
    sendOtp: 'OTP ਭੇਜੋ',
    verifyingOtp: 'OTP ਤਸਦੀਕ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...',
    otpSuccess: 'OTP ਕਾਮਯਾਬੀ ਨਾਲ ਤਸਦੀਕ ਹੋ ਗਿਆ!',
    selectRole: 'ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ',
    farmer: 'ਕਿਸਾਨ',
    fpo: 'FPO',
    buyer: 'ਖਰੀਦਦਾਰ',
    investor: 'ਨਿਵੇਸ਼ਕ',
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    welcomeToApp: 'ਕ੍ਰਿਸ਼ੀ ਮਿੱਤਰ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ',
    detectingLocation: 'ਤੁਹਾਡਾ ਟਿਕਾਣਾ ਲੱਭਿਆ ਜਾ ਰਿਹਾ ਹੈ...',
    locationDetected: 'ਟਿਕਾਣਾ ਲੱਭਿਆ ਗਿਆ',
    basedOnLocation: 'ਤੁਹਾਡੇ ਟਿਕਾਣੇ ਦੇ ਅਧਾਰ ਤੇ',
    useDifferentLanguage: 'ਵੱਖਰੀ ਭਾਸ਼ਾ ਵਰਤੋ',
    continueInLanguage: 'ਇਸ ਭਾਸ਼ਾ ਵਿੱਚ ਜਾਰੀ ਰੱਖੋ'
  }
};