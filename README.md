# Weather Now 🌦️  
*Real-time Weather & Forecast App*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Last Updated](https://img.shields.io/badge/last%20updated-June%202024-orange.svg)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🌍 Overview

**Weather Now** is a modern, responsive web app that provides real-time weather updates and forecasts for any city. Powered by OpenWeatherMap, it displays current conditions, hourly forecasts, and interactive charts. Perfect for travelers, planners, and weather enthusiasts!

---

## 🖼️ Screenshots

> Replace these links with your own screenshots or GIFs!

![App Screenshot](https://via.placeholder.com/900x500?text=Weather+Now+Screenshot)
![Forecast Chart](https://via.placeholder.com/900x500?text=Forecast+Chart)

---

## ✨ Features

- 🔍 **City Search:** Instantly get weather for any city
- 🌡️ **Current Conditions:** Temperature, humidity, wind, and more
- 📊 **Forecast Chart:** Interactive temperature & humidity trends
- 🕒 **Hourly Forecast Grid:** Next 10 hours at a glance
- 🎨 **Beautiful UI:** Responsive, mobile-friendly design
- ⚡ **Fast & Lightweight:** Built with Vite & React
- 🗄️ **API Integration:** Fetches live data from OpenWeatherMap

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Chart.js](https://www.chartjs.org/), [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Deployment:** [Vercel](https://vercel.com/)
- **API:** [OpenWeatherMap](https://openweathermap.org/api)

---

## 🚀 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/weather-now.git
   cd weather-now
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

---

## 📖 Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Enter a city name and hit **Search**.
- View current weather, hourly forecast, and interactive charts.

---

## ⚙️ Configuration

- **API Key:**  
  The app uses OpenWeatherMap API.  
  - For local development, set your API key in [`src/api.js`](src/api.js).
  - For serverless API ([`api/weather.js`](api/weather.js)), set `OPENWEATHER_API_KEY` in your Vercel environment variables.

  ```
  OPENWEATHER_API_KEY=your_openweathermap_api_key
  ```

---

## 🤝 Contributing

Contributions are welcome!  
- Fork the repo
- Create a feature branch (`git checkout -b feature/your-feature`)
- Commit your changes
- Open a pull request

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

![License](https://img.shields.io/badge/license-MIT-blue.svg)  
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- Inspiration from weather apps & open-source projects

---