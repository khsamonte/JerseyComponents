import { SVG } from "@svgdotjs/svg.js";
const { btoa } = require("abab");

// Parameters
const w = 25; // SVG viewbox width
const h = 24; // SVG viewbox height

const sleeveW = w / 5; // sleeve width
const shirtW = w - sleeveW * 2; // shirt chest width

const horStripeW = shirtW / 5; // horizontal stripe width
const horStripeH = h / 5; // horizontal stripe height

const squareW = shirtW / 3;

const drawSquares = (page, base, squares) =>
  page.pattern(w, h, function (add) {
    add.rect(w, h).fill(`#${base}`);
    add.rect(w, h).fill(`#${base}`);

    // 1st row
    add
      .rect(squareW, horStripeH)
      .move(sleeveW, horStripeH * 0)
      .fill(`#${squares}`);
    add
      .rect(squareW, horStripeH)
      .move(sleeveW + squareW * 2, horStripeH * 0)
      .fill(`#${squares}`);

    // 2nd row
    add
      .rect(squareW, horStripeH)
      .move(sleeveW + squareW * 1, horStripeH * 1)
      .fill(`#${squares}`);

    // 3rd row
    add
      .rect(squareW, horStripeH)
      .move(sleeveW, horStripeH * 2)
      .fill(`#${squares}`);
    add
      .rect(squareW, horStripeH)
      .move(sleeveW + squareW * 2, horStripeH * 2)
      .fill(`#${squares}`);

    // 4th row
    add
      .rect(squareW, horStripeH)
      .move(sleeveW + squareW * 1, horStripeH * 3)
      .fill(`#${squares}`);

    // 5th row
    add
      .rect(squareW, horStripeH)
      .move(sleeveW, horStripeH * 4)
      .fill(`#${squares}`);
    add
      .rect(squareW, horStripeH)
      .move(sleeveW + squareW * 2, horStripeH * 4)
      .fill(`#${squares}`);
  });

const drawStripes = (page, base, stripes) =>
  page.pattern(w, h, function (add) {
    add.rect(w, h).fill(`#${base}`);
    // add.rect(horStripeW, h).move(sleeveW, 0).fill(`#${stripes}`);
    add.rect(horStripeW, h).move(sleeveW, 0).fill(`#${stripes}`);
    add
      .rect(horStripeW, h)
      .move(sleeveW + horStripeW * 2, 0)
      .fill(`#${stripes}`);
    add
      .rect(horStripeW, h)
      .move(sleeveW + horStripeW * 4, 0)
      .fill(`#${stripes}`);
  });

const drawHorizontalStripes = (page, base, horizontalStripes) =>
  page.pattern(w, h, function (add) {
    add.rect(w, h).fill(`#${base}`);
    add
      .rect(w, horStripeH)
      .move(sleeveW, horStripeH * 0)
      .fill(`#${horizontalStripes}`);
    add
      .rect(w, horStripeH)
      .move(sleeveW, horStripeH * 2)
      .fill(`#${horizontalStripes}`);
    add
      .rect(w, horStripeH)
      .move(sleeveW, horStripeH * 4)
      .fill(`#${horizontalStripes}`);
  });

const drawSplit = (page, base, split) =>
  page.pattern(w, h, function (add) {
    add.rect(w, h).fill(`#${split}`);
    add
      .rect(shirtW / 2, h)
      .move(sleeveW, 0)
      .fill(`#${base}`);
  });

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
    "M24.5 3.603C24.51 3.37281 24.39 3.15263 24.18 3.04254L20.55 1.201C20.38 1.12093 20.21 1.05088 20.03 0.980817C19.68 0.820684 19.32 0.690575 18.96 0.570475C18.94 0.570475 18.92 0.560467 18.91 0.550459C18.57 0.440367 18.22 0.340284 17.87 0.270225C17.77 0.250208 17.66 0.230192 17.55 0.210175C17.27 0.160133 17 0.100083 16.72 0.0700584C16.32 0.0200167 15.92 0 15.51 0C15.37 0 15.26 0.100083 15.23 0.230192C14.92 1.49124 13.82 2.43203 12.5 2.43203C11.18 2.43203 10.08 1.49124 9.77 0.230192C9.74 0.100083 9.63 0 9.49 0C7.74 0 6.01 0.410342 4.45 1.201L0.83 3.04254C0.72 3.09258 0.64 3.18265 0.58 3.28274C0.53 3.37281 0.5 3.4829 0.5 3.603L1.1 8.18682L1.21 9.04754C1.21 9.12761 1.23 9.20767 1.24 9.29775C1.27 9.55796 1.33 9.75813 1.4 9.82819C1.67 10.0684 2.15 9.84821 2.24 9.79816L2.27 9.77815L4.95 8.60717V21.1877C4.95 21.4979 5.1 21.7982 5.37 21.9683C6.33 22.5888 8.9 24 12.48 24C16.06 24 18.63 22.5888 19.59 21.9683C19.85 21.7982 20.01 21.4979 20.01 21.1877V8.60717L22.36 9.63803L22.79 9.82819C23.2 10.0083 23.68 9.73811 23.74 9.29775L24.49 3.62302L24.5 3.603Z";

  const pathLeftSleeve =
    "M4.45914 1.2009L1.36914 2.7622L2.28914 9.76804L4.96914 8.59706V0.980713C4.79914 1.06078 4.61914 1.12083 4.45914 1.2009Z";

  const pathRightSleeve =
    "M22.7093 9.76804L23.6293 2.7622L20.5393 1.2009C20.3693 1.12083 20.1993 1.05077 20.0293 0.980713V8.59706L22.7093 9.76804Z";

  const pathLeftSleeveDetail =
    "M2.29 9.76805L1.37 2.77222L0.83 3.04244C0.61 3.15253 0.5 3.37272 0.5 3.60291L1.1 8.18673L1.21 9.04745C1.21 9.12751 1.23 9.20758 1.24 9.29766C1.27 9.55787 1.33 9.75804 1.4 9.8281C1.67 10.0683 2.15 9.84811 2.24 9.79807L2.27 9.77806L2.29 9.76805Z";

  const pathRightSleeveDetail =
    "M22.7109 9.76805L23.6309 2.77222L24.1709 3.04244C24.3809 3.15253 24.5009 3.37272 24.4909 3.60291L23.8909 8.18673L23.7809 9.04745C23.7809 9.12751 23.7609 9.20758 23.7509 9.29766C23.7209 9.55787 23.6609 9.75804 23.5909 9.8281C23.3209 10.0683 22.8409 9.84811 22.7509 9.79807L22.7209 9.77806L22.7109 9.76805Z";

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

  page.viewbox(`0 0 ${w} ${h}`);

  const svgData = page.svg();

  const base64Data = btoa(svgData);
  const dataUri = `data:image/svg+xml;base64,${base64Data}`;
  return dataUri;
}
