# 🌾 Rupiya.app – AI Powered Agriculture Education Platform  
### 🔗 Live Demo: https://rupiya-app-educate.vercel.app

---

## 📌 Overview  
Rupiya.app is an **AI-driven agricultural education platform** designed to help farmers understand modern farming practices in the simplest way possible.  
The platform breaks down complex topics like **satellite soil testing**, **NDVI monitoring**, **parametric insurance**, **carbon credits**, and **residue-free farming** into:

- 🎥 Simple video explanations  
- 📝 Easy text summaries  
- 🧩 Big diagrams  
- 🎤 Voice assistant  
- 🤖 AI agent for 24×7 doubt support  
- 🌍 Automatic local language detection  

Even farmers who cannot read can understand modern farming quickly and easily.

---

## 🚜 Why This Platform?  
India’s farmers face multiple challenges:

- Complex technical terms  
- Hard-to-read documents  
- Language barriers  
- No single place to learn modern agriculture  
- Confusion around soil testing, NDVI, insurance, carbon credits, etc.

**Rupiya.app solves this by making every topic understandable using AI + Video + Voice + Local Language.**

---

## 🎯 Core Features  
### 🔹 1. Automatic Language Detection  
- Detects farmer location  
- Sets app language automatically  
- Full UI + AI Agent in local language  

---

### 🔹 2. AI Agriculture Agent (24×7 Support)  
- Explains farming topics in simple language  
- Answers farmer doubts  
- Works with voice or text  
- Farmer-friendly behavior (slow, simple, clear answers)

---

### 🔹 3. Voice Assistant  
- For farmers who cannot read  
- Voice input + AI explanation  
- Text-to-speech in farmer’s language  

---

### 🔹 4. Video + Diagram Based Learning  
Each topic includes:
- A simple explainer video  
- A diagram with arrows  
- A farmer-friendly text summary  
- AI agent buttons  
- Voice explanation  

Topics include:

- Satellite Soil Testing  
- NDVI Crop Monitoring  
- AI Crop Diagnosis  
- Agronomy Advisory  
- 35 Residue-Free Inputs  
- Parametric Insurance  
- Farm Credit  
- Buyback Program  
- Carbon Credit Earning  

---

### 🔹 5. Clean Frontend Architecture  
Pages included:

- `/` AutoLanguageScreen  
- `/login` MobileLogin  
- `/verify-otp` OtpAutoVerify  
- `/select-category` SelectCategory  
- `/farmer-dashboard` FarmerEducationPage  
- `/other` EducatePage  
- `/investor` Investor  
- `/carbon-credit` CarbonCreditBuyers  
- `/fpos` FPOs  
- `/institutionalbuyers` InstitutionalBuyers  

---

## 🏗️ Frontend System Architecture (React)  

### **Top-Level Providers**
- `LanguageProvider` – Global language state  
- `AuthProvider` – User auth state  
- `React Router` – Page routing  

### **AI Layer (Frontend Only)**
- AI Agent Component  
- Voice Assistant Component  
- Language-aware responses  
- Dummy API integration (ready for backend)

### **Education Modules**
- Video Section  
- Diagram Section  
- Text Summary  
- AI Q&A Button  
- Voice Explanation  

Everything is handled **completely on the frontend** as required by the hackathon problem statement.

---

## 📚 Tech Stack  
- **React.js**  
- **Tailwind CSS**  
- **React Router DOM**  
- **Framer Motion** (UI animations)  
- **LocalStorage** (Language storage)  
- **Context API** (Language + Auth)  
- **AI Agent (frontend mock integration)**  

---

## 🔮 Future Vision  
- Full real AI backend (DeepSeek/OpenAI)  
- Live satellite data integration  
- Carbon credit advisor  
- Weather-based crop learning  
- IoT device sync  
- FPO-level dashboards  
- Institutional buyer insights  
- Marketplace for clean produce  
- Farmer community platform  

---

## 🚀 How to Run Locally  

```bash
git clone <repo-url>
cd rupiya-app
npm install
npm run dev
