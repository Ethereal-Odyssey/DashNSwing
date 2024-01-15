import 'phaser';
import Game from './scenes/Game';

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
  },
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
};

window.addEventListener('load', () => {
  new Phaser.Game(config);
});
