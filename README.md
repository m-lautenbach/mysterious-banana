# Collaborative Canvas

## Get started

Install all dependencies with `yarn` (install `yarn` if you don't have).
Alternatively, use `npm install`.

Start the dev server with `yarn start` / `npm run start`, a tab will open automatically and there will be hot reloading.

## Development

To run all tests, run `yarn test`.

To build a bundle ready for deployment, run `yarn build`.

This project is based on `create-react-app`, which simplifies setup and some operations.
If you want to have full access to all configuration (this can't be undone), run `yarn eject`.

## Usage

On the root route `/`, you see the list of all canvases from the server with a preview.
If you click the name of the preview image, you see the full canvas.
In the latter view, clicking on one pixel will toggle it between black and white, enabling drawing.
