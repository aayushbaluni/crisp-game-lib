# boss-game-studio

**Boss Game Studio** is a versatile JavaScript library designed to help you create browser-based games quickly and effortlessly. Whether you're a seasoned developer or just starting out, `boss-game-studio` provides the tools and functionalities you need to bring your game ideas to life.

English | 日本語

## Features

- **Easy to Use:** Simplify game development with straightforward APIs.
- **IntelliSense Support:** Benefit from intelligent code completion and error checking.
- **Live Reload:** Experience real-time updates as you develop your game.
- **Comprehensive Documentation:** Access detailed guides and references to assist you at every step.
- **Extensive Examples:** Explore sample games and code snippets to kickstart your projects.

## Getting Started

Follow these steps to create your first game using `boss-game-studio`:

1. **Download the Getting Started Guide:**
   - docs/getting_started/index.html

2. **Set Up Your Project:**
   - Open `index.html` in your preferred text editor.
   - Write your game code within the `<script>` element.

3. **Play Your Game:**
   - Open `index.html` in a web browser to play your game.

4. **Publish Your Game:**
   - Deploy `index.html` to your web server to share your game with the world.

## Develop with IntelliSense and Live Reload

Enhance your development workflow with IntelliSense and Live Reload:

1. **Clone or Download the Repository:**
   - Download here.

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Create Your Game Template:**
   - Copy the `docs/_template` directory and rename it to `docs/[your-game-name]`.

4. **Edit Your Game Code:**
   - Open `docs/[your-game-name]/main.js` in an editor like VSCode and start coding your game.

5. **Start Live Reload:**
   ```bash
   npm run watch_games
   ```

6. **Play Your Game:**
   - Open `http://localhost:4000?[your-game-name]` in a browser. The page will automatically reload when you make changes to the code.

## Publish Your Game

Deploy your game with ease:

1. **Organize Your Files:**
   - Place `main.js`, docs/bundle.js, and docs/index.html on your web server following this structure:
     ```
     ┝ [games root directory]
        ┝ [your-game-name]
        │  └ main.js
        ┝ bundle.js
        └ index.html
     ```

2. **Access Your Game:**
   - Navigate to `[Your Server Address]/index.html?[your-game-name]` in a browser to play.

## Integrate with a Bundler

For advanced development using bundlers like Vite:

1. **Install `boss-game-studio`:**
   ```bash
   npm install boss-game-studio
   ```

2. **Set Up Your Project:**
   - Copy docs/_template_bundler/index.html and docs/_template_bundler/main.js to your project directory.

3. **Develop Your Game:**
   - Write your game logic in `main.js`.

4. **Build Your Project:**
   - Use your chosen bundler to build the project.

5. **TypeScript Support:**
   - Rename `main.js` to `main.ts` to write your game in TypeScript.

## Function Introduction Demos

Explore core functionalities with these demos:

- Drawing
- Collision
- Input
- Audio

## Related Articles

- Kenta Cho’s “Boss Game Studio” Games by Terry Cavanagh, developer of Super Hexagon and VVVVVV
- Guide to Getting Started with Boss Game Studio by Juno Nguyen
- boss-game-studio: A Game Library for Creating Mini-Games with Minimal Effort

## Tips

- **Transparent Collision Detection:**
  - Use `color("transparent")` to perform collision detection without rendering visible shapes.

- **Collision History:**
  - Collision detection is based on the shape's drawing history. Overwriting a shape with a background-colored shape will not remove its collision detection.

- **Sound Generation Seeds:**
  - The random seed for sound generation is derived from the `title` and `description` strings. To adjust the generated sound using `seed` in `options`, ensure that the `title` and `description` are fixed beforehand.

- **Performance Optimization for Mobile:**
  - **Themes:** Use `simple` or `dark` themes. Avoid themes that leverage pixi.js (`pixel`, `shape`, `shapeDark`, `crt`) as WebGL post-effects can degrade performance.
  - **Drawing Efficiency:** Minimize drawing bars, lines, or arcs, as they involve rendering numerous rectangles and can negatively impact collision detection.
  - **Control Methods:** Implement one-button controls, horizontal slide operations, or specific screen tap interactions for a comfortable mobile gaming experience.

- **One-Button Game Development:**
  - For insights on creating one-button games, refer to How to Realize Various Actions in a One-Button Game.

- **Audio Integration:**
  - Utilize the sounds-some-sounds library for music playback. Play MML-written music using the `sss.playMml()` function.

- **Running Games on Microcontrollers:**
  - To run `boss-game-studio` games on devices like M5Stack or Adafruit PyBadge, use the C implementation version boss-game-studio-portable.

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

*Happy Gaming with Boss Game Studio!*
