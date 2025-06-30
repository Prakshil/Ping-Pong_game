# Simple PingPong Game

A classic Pong game implementation using HTML5 Canvas and JavaScript. Play against an AI opponent using mouse controls!

## Features

- 🎮 **Mouse Controls**: Control the left paddle with your mouse
- 🤖 **AI Opponent**: Smart AI controls the right paddle
- 🎯 **Dynamic Ball Physics**: Ball changes direction based on paddle hit position
- 📊 **Score Tracking**: Real-time score display for both players
- 🎨 **Modern Styling**: Clean, dark theme with colorful paddles

## How to Play

1. Open `index.html` in your web browser
2. Move your mouse up and down to control the cyan (left) paddle
3. Try to hit the ball past the AI's magenta (right) paddle to score
4. The game continues indefinitely - see how high you can score!

## Game Mechanics

- **Left Paddle (Player)**: Controlled by mouse movement
- **Right Paddle (AI)**: Automatically follows the ball with slight delay
- **Ball Physics**: 
  - Bounces off top and bottom walls
  - Changes vertical speed based on where it hits the paddle
  - Resets to center after each score
- **Scoring**: Point awarded when ball passes opponent's paddle

## File Structure

```
├── index.html      # Main HTML file
├── game.js         # Game logic and physics
├── style.css       # Styling and layout
└── README.md       # This file
```

## Technical Details

### Canvas Setup
- **Resolution**: 800x500 pixels
- **Paddle Dimensions**: 14x100 pixels
- **Ball Size**: 16x16 pixels

### Game Constants
- Ball speed: 5 pixels/frame horizontally, 4 pixels/frame vertically
- AI paddle speed: 4 pixels/frame
- Frame rate: Browser's refresh rate (typically 60 FPS)

### Color Scheme
- Background: Dark gray (#222)
- Left paddle: Cyan (#0ff)
- Right paddle: Magenta (#f0f)
- Ball & UI: White (#fff)
- Body background: Dark theme (#181818)

## Browser Compatibility

This game works in all modern browsers that support:
- HTML5 Canvas
- ES6 JavaScript features
- CSS3 styling

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Start playing** immediately!

No installation or build process required - it's a pure client-side game.

## Customization

You can easily modify the game by editing these values in `game.js`:

```javascript
// Game speed
ballSpeedX = 5;  // Horizontal ball speed
ballSpeedY = 4;  // Vertical ball speed

// Paddle settings
PADDLE_WIDTH = 14;
PADDLE_HEIGHT = 100;

// AI difficulty (lower = harder)
rightPaddleY += 4;  // AI paddle speed
```

## Future Enhancements

Potential improvements you could add:
- [ ] Two-player mode (keyboard controls for right paddle)
- [ ] Sound effects
- [ ] Particle effects
- [ ] Different difficulty levels
- [ ] Game over screen
- [ ] High score persistence
- [ ] Power-ups
- [ ] Different ball speeds

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Enjoy the game!** 🏓
