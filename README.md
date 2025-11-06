# Relax App 🎵

A minimalist web application designed to help you relax and unwind with ambient nature sounds and beautiful scenery. Perfect for meditation, studying, working, or simply taking a peaceful break.

## 🌟 Features

- **Four Relaxing Environments**: Choose from carefully selected nature scenes, each with its own ambient audio:
  - 🏖️ **Beach** - Soothing ocean waves
  - 🌲 **Forest** - Peaceful woodland atmosphere
  - 🌧️ **Rain** - Cozy rainy day ambiance
  - 🌙 **Night** - Tranquil summer starry night

- **Interactive Audio Controls**: Play and pause buttons integrated seamlessly into each scene
- **Responsive Grid Layout**: Adapts beautifully to any screen size with auto-fitting cards
- **Smooth Animations**: Elegant hover effects and transitions for enhanced user experience
- **Clean UI**: Minimalist design that keeps focus on relaxation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and audio elements
- **CSS3**: Modern grid layout, flexbox, and smooth transitions
- **Vanilla JavaScript**: Lightweight and efficient DOM manipulation
- **SVG Icons**: Scalable custom play/pause buttons

## 📁 Project Structure

```
Chill App/
├── index.html          # Main HTML structure
├── main.js            # JavaScript functionality
├── style.css          # Styling and layout
├── audios/            # Audio files
│   ├── waves.mp3
│   ├── forest.mp3
│   ├── rain.wav
│   └── night.mp3
└── img/               # Image assets
    ├── preview/       # Thumbnail images
    └── full/          # Full-size images
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ajsevillano/Relax-app.git
```

2. Navigate to the project directory:
```bash
cd Relax-app
```

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (recommended for best performance)

### Using a Local Server (Optional)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 💡 How to Use

1. **Select a Scene**: Browse through the four available nature scenes
2. **Play Audio**: Click the play button (▶️) on any scene to start the ambient sound
3. **Pause Audio**: Click the pause button (⏸️) to stop and reset the audio
4. **Mix and Match**: Play multiple scenes simultaneously to create your perfect ambient soundscape

## 🎨 Features Breakdown

### Audio Management
- Each scene has its own independent audio player
- Click play to start, pause to stop and reset to beginning
- Smooth toggle between play and pause states

### Responsive Design
- Grid layout automatically adjusts based on screen size
- Minimum card width of 400px ensures optimal viewing
- Cards scale proportionally to fill available space

### Visual Feedback
- Buttons scale up 1.2x on hover for better interactivity
- Smooth 0.3s transitions for all animations
- Opacity changes indicate interactive elements

## 🔧 Customization

### Adding New Scenes

1. Add your audio file to the `/audios` directory
2. Add preview and full images to `/img/preview` and `/img/full`
3. Add a new card in `index.html` following the existing pattern:

```html
<div class="img-container">
    <img src="./img/preview/your-image-small.jpg" 
         alt="Your scene" 
         data-original="your-image-full.jpg" />
    <div class="elements-box">
        <audio class="audios" src="./audios/your-audio.mp3"></audio>
        <p>Your scene description</p>
        <!-- Include play and pause SVG buttons -->
    </div>
</div>
```

### Styling Modifications

Edit `style.css` to customize:
- Grid layout (change `minmax(400px, 1fr)` for different card sizes)
- Colors and fonts
- Transition speeds and effects
- Button sizes and opacity

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new ambient sounds and scenes
- Improve the UI/UX
- Fix bugs or optimize code
- Enhance accessibility features

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

**Antonio José Sevillano**
- GitHub: [@ajsevillano](https://github.com/ajsevillano)

## 🙏 Acknowledgments

- Ambient sounds and images used for relaxation purposes
- Inspired by meditation and focus apps
- Built with simplicity and user experience in mind

---

Made with ❤️ for peaceful moments
