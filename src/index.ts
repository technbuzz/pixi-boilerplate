import { Application, Texture, TilingSprite } from "pixi.js";
import { Viewport } from "pixi-viewport";

const app = new Application({
  backgroundColor: 0x1d1d1d
})

const viewport = new Viewport({
  interaction: app.renderer.plugins.interaction
})

viewport.drag().decelerate()

app.stage.addChild(viewport)

const texture = Texture.from('p2.jpeg')

const tilingSprite = new TilingSprite(texture, app.screen.width, app.screen.height)

app.stage.addChild(tilingSprite)

// app.ticker.add(() => {
//   tilingSprite.tilePosition.x += 1
//   tilingSprite.tilePosition.y += 1
// })

document.body.appendChild(app.view)