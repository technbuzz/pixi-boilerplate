import { Application, Texture, TilingSprite } from "pixi.js";
import { Viewport } from "pixi-viewport";
import * as PixiJSGrid from "pixijs-grid"

const  WORLDWIDTH = 2000
const  WORLDHEIGHT = 2000

const app = new Application({
  backgroundColor: 0xffffff,
  width: WORLDWIDTH,
  height: WORLDHEIGHT
})

const viewport = new Viewport({
  interaction: app.renderer.plugins.interaction
})

viewport.drag().decelerate()
console.log('viewport: ', viewport);
viewport.position.set(innerWidth/2, innerHeight/2)
viewport.on('moved', event => {
  console.log('event: ', event.viewport.position);
  console.log('moved');
  tilingSprite.position.x = viewport.position.x
  tilingSprite.position.y = viewport.position.y
})

app.stage.addChild(viewport)

const texture = Texture.from('p2.jpeg')

const tilingSprite = new TilingSprite(texture, WORLDWIDTH, WORLDHEIGHT)

// app.stage.addChild(tilingSprite)

const grid = new PixiJSGrid(30).drawGrid()

// app.ticker.add(() => {
//   tilingSprite.tilePosition.x += 1
//   tilingSprite.tilePosition.y += 1
// })

document.body.appendChild(app.view)