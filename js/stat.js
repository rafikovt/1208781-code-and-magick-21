'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_GAP = 50;
const BAR_X = 100;
const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
const getMaxElement = (arr) => {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = (ctx, names, times) => {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`);
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `White`);
  ctx.fillStyle = `Black`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);
  const maxTime = getMaxElement(times);
  for (let i = 0; i < names.length; i++) {
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      const getRandomSaturation = () => `hsla(240, ${(Math.random().toFixed(2) * 100) + `%`}, 50%)`;
      ctx.fillStyle = getRandomSaturation();
    }
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT);
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        BAR_X,
        BAR_WIDTH,
        BAR_HEIGHT);
    ctx.fillStyle = `White`;
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        BAR_X,
        BAR_WIDTH,
        BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = `Black`;
    ctx.fillText(
        Math.floor(times[i]),
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - GAP * 3 - BAR_HEIGHT * times[i] / maxTime);
  }
};
