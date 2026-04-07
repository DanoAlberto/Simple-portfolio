# 🎨 DanoAlberto - Interactive Portfolio

Nowoczesna, responsywna strona portfolio zbudowana z **React**, **Vite**, **Framer Motion** i **Tailwind CSS**.

## ✨ Cechy

- ⚡ **Vite** - Błyskawiczna bundlacja
- ⚛️ **React 18** - Nowoczesne komponenty
- 🎬 **Framer Motion** - Gładkie animacje
- 🎨 **Tailwind CSS** - Nowoczesne stylizowanie
- 📱 **Responsywny Design** - Działa na wszystkich urządzeniach
- 🌙 **Dark Theme** - Elegancki ciemny motyw
- ⌨️ **Smooth Scrolling** - Płynne przewijanie

## 📂 Struktura Projektu

```
src/
├── components/
│   ├── Navbar.jsx          # Nawigacja z mobile menu
│   ├── Hero.jsx            # Hero section z animacjami
│   ├── About.jsx           # Sekcja "O mnie"
│   ├── Projects.jsx        # Portfolio projektów z filtrowaniem
│   ├── Skills.jsx          # Umiejętności i tech stack
│   ├── Contact.jsx         # Formularz kontaktu
│   └── Footer.jsx          # Stopka
├── App.jsx                 # Główny komponent
├── main.jsx                # Entry point
└── index.css               # Globalne style

public/
└── index.html              # HTML template

Configuration Files:
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Zależności
```

## 🚀 Szybki Start

### Wymagania
- Node.js 16+ 
- npm lub yarn

### Instalacja

```bash
# Klonuj repozytorium
git clone https://github.com/DanoAlberto/Simple-portfolio.git
cd Simple-portfolio

# Zainstaluj zależności
npm install

# Uruchom dev server
npm run dev
```

Server będzie dostępny na `http://localhost:3000`

### Build

```bash
# Zbuduj aplikację
npm run build

# Podgląd produkcji
npm run preview
```

## 📦 Zależności

### Production
- **react** - JavaScript library
- **react-dom** - React DOM rendering
- **framer-motion** - Animation library
- **react-icons** - Icon library
- **react-scroll** - Smooth scrolling

### Development
- **vite** - Build tool
- **@vitejs/plugin-react** - React plugin for Vite
- **tailwindcss** - CSS framework
- **postcss** - CSS transformer
- **autoprefixer** - PostCSS plugin

## 🎨 Dostosowywanie

### Zmiana Kolorów
Edytuj `tailwind.config.js` i zmień kolory w sekcji `theme`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Dodawanie Projektów
Edytuj tablicę `projects` w `src/components/Projects.jsx`:

```javascript
{
  id: 7,
  title: 'Twój Projekt',
  description: 'Opis projektu',
  image: '🎯',
  tags: ['Tech1', 'Tech2'],
  category: 'fullstack',
  github: 'https://github.com/...',
  live: 'https://...',
}
```

## 📝 Sekcje

### Hero
- Animowany tekst powitalny
- Social media linki
- CTA button

### About
- Informacje o Tobie
- Zdjęcie/grafika
- Historia programistyczna

### Projects
- Portfolio projektów
- Filtrowanie po kategorii
- Linki do GitHub i live demo

### Skills
- Tech stack
- Ikony technologii
- Progress bars umiejętności

### Contact
- Formularz kontaktu
- Email/Phone/Location
- Social media linki

## 🚀 Deployment

### Netlify
```bash
npm run build
# Wrzuć folder 'dist' na Netlify
```

### Vercel
```bash
# Połącz z Vercel
vercel deploy
```

### GitHub Pages
Edytuj `vite.config.js`:
```javascript
export default {
  base: '/Simple-portfolio/',
  // ... rest of config
}
```

## 🤝 Kontrybuowanie

Wszelkie sugestie i pull requesty są mile widziane!

## 📄 Licencja

MIT License - patrz plik LICENSE

## 📧 Kontakt

- Email: your@email.com
- GitHub: [@DanoAlberto](https://github.com/DanoAlberto)
- LinkedIn: [Twój profil](https://linkedin.com)

---

**Made with ❤️ by DanoAlberto**