import 'phaser';
import SceneKeys from '../consts/SceneKeys';

export default class Game extends Phaser.Scene {
  startPoint: Phaser.Math.Vector2 | null = null;
  constructor() {
    super(SceneKeys.Game);
  }

  preload() {}

  create() {
    const diameter = Math.min(this.scale.width, this.scale.height) / 15;

    // 원 생성
    const circle = this.add.circle(
      this.scale.width / 2,
      this.scale.height / 2,
      diameter / 2,
      0xff0000,
    );

    // 원에 물리 속성 적용
    this.physics.add.existing(circle);

    // 원의 물리 속성 설정
    const circleBody = circle.body as Phaser.Physics.Arcade.Body;
    circleBody.setCircle(diameter / 2);
    circleBody.setCollideWorldBounds(true);
    circleBody.setBounce(1);

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.startPoint = new Phaser.Math.Vector2(pointer.x, pointer.y);
    });

    this.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
      if (!this.startPoint) {
        return;
      }

      const endPoint: Phaser.Math.Vector2 = new Phaser.Math.Vector2(
        pointer.x,
        pointer.y,
      );
      const difference: Phaser.Math.Vector2 = endPoint.subtract(
        this.startPoint,
      );
      const newVelocity: Phaser.Math.Vector2 = difference.clone();
      newVelocity.normalize();
      newVelocity.scale(2000);
      circleBody.setVelocity(newVelocity.x, newVelocity.y);

      this.startPoint = null; // reset for the next swipe
    });
  }
}
