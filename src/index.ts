import { Application } from "pixi.js";

const pixi_wrapper = document.querySelector('.pixi-wrapper') as HTMLElement;

const app = new Application({
  resizeTo: pixi_wrapper,
  backgroundColor: 0x1d1d1d
})