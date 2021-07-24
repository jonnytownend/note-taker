import { GLOBAL_FONT } from "./constants"

var dummyCanvas: any | undefined = undefined

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export const getTextWidth = (text: string, weight: number, font: string = GLOBAL_FONT): number => {
  // re-use canvas object for better performance
  if (!dummyCanvas) {
    dummyCanvas = document.createElement("canvas")
  }
  var context = dummyCanvas.getContext("2d")
  context.font = `${weight}px ${font}`
  var metrics = context.measureText(text)
  return metrics.width as number
}