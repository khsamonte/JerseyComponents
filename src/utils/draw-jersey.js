import { SVG } from "@svgdotjs/svg.js";
const { btoa } = require("abab");

function drawSquares(page, base, squares) {
  return page.pattern(20, 24, function (add) {
    add.rect(20, 20).fill(`#${base}`);
    add.rect(4.2, 4.7).move(3.7, 0).fill(`#${squares}`);
    add.rect(4.2, 4.7).move(12.1, 0).fill(`#${squares}`);
    add.rect(4.2, 4.8).move(7.9, 4.7).fill(`#${squares}`);
    add.rect(4.2, 4.8).move(3.7, 9.5).fill(`#${squares}`);
    add.rect(4.2, 4.8).move(12.1, 9.5).fill(`#${squares}`);
  });
}

const drawStripes = (page, base, stripes) => {
  return page.pattern(20, 24, function (add) {
    add.rect(20, 24).fill(`#${base}`);
    add.rect(2.5, 24).move(3.7, 0).fill(`#${stripes}`);
    add.rect(2.5, 24).move(8.8, 0).fill(`#${stripes}`);
    add.rect(2.5, 24).move(13.8, 0).fill(`#${stripes}`);
  });
};

const drawHorizontalStripes = (page, base, horizontalStripes) => {
  return page.pattern(20, 24, function (add) {
    add.rect(20, 24).fill(`#${base}`);
    add.rect(20, 3).fill(`#${horizontalStripes}`);
    add.rect(20, 3).move(0, 5.6).fill(`#${horizontalStripes}`);
    add.rect(20, 3).move(0, 11.2).fill(`#${horizontalStripes}`);
  });
};

const drawSplit = (page, base, split) => {
  return page.pattern(20, 24, function (add) {
    add.rect(20, 24).fill(`#${split}`);
    add.rect(6.5, 24).move(3.7, 0).fill(`#${base}`);
  });
};

export default function drawJersey({
  base,
  sleeve,
  sleeve_detail,
  horizontal_stripes,
  horizontal_stripes_color,
  stripes,
  stripes_color,
  squares,
  squares_color,
  split,
  split_color,
  number,
}) {
  // Main shirt
  const pathMainBody =
    "M16.3002 8.1V0.8C16.0002 0.7 15.8002 0.6 15.6002 0.5C15.2002 0.3 14.8002 0.2 14.5002 0.2C14.2002 0.1 14.0002 0.1 13.5002 0C13.1002 0 12.7002 0 12.3002 0C12.2002 0.5 12.0002 0.9 11.7002 1.2C11.6002 1.4 11.4002 1.5 11.2002 1.6C10.9002 1.9 10.5002 2 10.0002 2C9.5002 2 9.1002 1.9 8.8002 1.6C8.6002 1.5 8.4002 1.4 8.3002 1.2C8.0002 0.9 7.8002 0.5 7.7002 0C7.30019 0 6.9002 0 6.5002 0.1C6.0002 0.1 5.9002 0.1 5.5002 0.2C5.2002 0.3 4.9002 0.4 4.4002 0.5C4.3002 0.6 4.0002 0.7 3.7002 0.8V6.2V13.3V13.5V13.7C3.7002 14 3.9002 14.2 4.2002 14.2H10.0002H15.8002C16.1002 14.2 16.3002 14 16.3002 13.7V13.4V8.1Z";

  const pathLeftSleeve =
    "M0.700195 2.2998L1.6002 6.6998L3.7002 6.2998V0.799805C3.4002 0.999805 3.0002 1.0998 2.8002 1.1998C2.4002 1.3998 1.3002 1.9998 0.700195 2.2998Z";

  const pathLeftSleeveDetail =
    "M0.7 2.2998C0.5 2.3998 0.3 2.4998 0.3 2.4998C0.1 2.5998 0 2.7998 0 2.9998L0.7 6.39981C0.9 6.9998 1.2 6.7998 1.6 6.6998L0.7 2.2998Z";

  const pathRightSleeve =
    "M19.2998 2.2998L18.3998 6.6998L16.2998 6.2998V0.799805C16.5998 0.899805 16.9998 1.0998 17.1998 1.1998C17.5998 1.3998 18.5998 1.9998 19.2998 2.2998Z";

  const pathRightSleeveDetail =
    "M19.9998 2.9998C19.9998 2.7998 19.8998 2.5998 19.6998 2.4998C19.6998 2.4998 19.4998 2.3998 19.1998 2.2998L18.2998 6.6998C18.6998 6.7998 18.9998 6.9998 19.1998 6.39981L19.9998 2.9998Z";

  const pathTrousers =
    "M16.3002 15.7002C16.3002 15.4002 16.1002 15.2002 15.8002 15.2002H10.0002H4.2002C3.9002 15.2002 3.7002 15.4002 3.7002 15.7002L3.2002 23.5002C3.2002 23.8002 3.4002 24.0002 3.7002 24.0002H8.7002C8.9002 24.0002 9.1002 23.8002 9.2002 23.6002L9.9002 20.5002C10.0002 20.4002 10.1002 20.3002 10.2002 20.5002L10.9002 23.6002C11.0002 23.8002 11.2002 24.0002 11.4002 24.0002H16.4002C16.7002 24.0002 16.9002 23.8002 16.9002 23.5002L16.3002 15.7002Z";

  const page = SVG();

  let shirtFill = `#${base}`;
  if (stripes) {
    shirtFill = drawStripes(page, base, stripes_color);
  } else if (horizontal_stripes) {
    shirtFill = drawHorizontalStripes(page, base, horizontal_stripes_color);
  } else if (split) {
    shirtFill = drawSplit(page, base, split_color);
  } else if (squares) {
    shirtFill = drawSquares(page, base, squares_color);
  }

  // Base
  page.path(pathMainBody).fill(shirtFill);

  // Left Sleeve
  page.path(pathLeftSleeve).fill(`#${sleeve}`);
  page.path(pathLeftSleeveDetail).fill(`#${sleeve_detail}`);

  // Right Sleeve
  page.path(pathRightSleeve).fill(`#${sleeve}`);
  page.path(pathRightSleeveDetail).fill(`#${sleeve_detail}`);

  // Shorts
  page.path(pathTrousers).fill("#999999");

  page.viewbox("0 0 20 24");

  const svgData = page.svg();

  const base64Data = btoa(svgData);
  const dataUri = `data:image/svg+xml;base64,${base64Data}`;
  return dataUri;
}
