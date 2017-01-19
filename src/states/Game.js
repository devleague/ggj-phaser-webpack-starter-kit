/* globals __DEV__ */
import Phaser from 'phaser';
// import Mushroom from '../sprites/Mushroom'
import DevLeagueLogo from '../sprites/DevLeagueLogo';

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'DevLeague Phaser + Webpack Starter Kit'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.devLeagueLogo = new DevLeagueLogo({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'devLeagueLogo'
    })

    this.game.add.existing(this.devLeagueLogo)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.devLeagueLogo, 32, 32)
    }
  }
}
