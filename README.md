# Pixel Art Project - Week 3

This project is a fun and interactive pixel art editor. Users can choose a color from a palette and paint on a white canvas, creating their unique designs. This project demonstrates my skills in JavaScript, CSS, HTML, and DOM manipulation learned in Week 3 at my bootcamp at Trybe.

## Project Overview

The pixel art editor allows users to:

- Select a color from a palette of four colors, with black as the default color.
- Paint on a 5x5 pixel canvas, with each pixel having a width and height of 40 pixels and a black border of 1 pixel.
- Reset the canvas to its original white color with a single click.
- Define a new size for the pixel canvas, with a minimum size of 5 pixels and a maximum size of 50 pixels.

The color palette is generated randomly every time the page is loaded, with the exception of the first color, which is always black.

## Project Structure

The project is structured into several JavaScript functions:

- `colorsRandomizer()`: This function generates random RGB colors for the color palette.
- `generatingNewBoard()`: This function creates a new pixel canvas based on the user's input.
- `renderizingPixels(num)`: This function renders the pixels on the canvas.
- `gettingColor()`: This function allows the user to select a color from the palette.
- `applyingColor()`: This function applies the selected color to a pixel on the canvas when clicked.
- `cleaningBoard()`: This function resets the color of all pixels on the canvas to white.

## Project Requirements

The project meets all the requirements specified in the bootcamp project readme. It has been developed with a screen resolution of 1366 x 768, and all images used are less than 500Kb in size.

## Feedback

I would love to hear your feedback on my project! Feel free to share your thoughts and suggestions.

## Portfolio

Check out my [portfolio](my-folio-weld.vercel.app) for more of my work!
