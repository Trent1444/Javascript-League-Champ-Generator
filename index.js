const topImages = [
  "images/adc/ashe.jpg",
  "images/adc/jhin.jpg",
  "images/adc/twitch.jpg",
  "images/adc/draven.jpg",
  "images/adc/ezreal.jpg",
  "images/adc/jinx.jpg",
  "images/adc/tristana.jpg",
];

function getRandomTop() {
  const randomTop = topImages[Math.floor(Math.random() * TopImages.length)];
  document.getElementById("championImage").src = randomTop;
}

const jungleImages = [
  "images/adc/ashe.jpg",
  "images/adc/jhin.jpg",
  "images/adc/twitch.jpg",
  "images/adc/draven.jpg",
  "images/adc/ezreal.jpg",
  "images/adc/jinx.jpg",
  "images/adc/tristana.jpg",
];

function getRandomJungle() {
  const randomJungle =
    jungleImages[Math.floor(Math.random() * jungleImages.length)];
  document.getElementById("championImage").src = randomJungle;
}

const midImages = [
  "images/adc/ashe.jpg",
  "images/adc/jhin.jpg",
  "images/adc/twitch.jpg",
  "images/adc/draven.jpg",
  "images/adc/ezreal.jpg",
  "images/adc/jinx.jpg",
  "images/adc/tristana.jpg",
];

function getRandomMid() {
  const randomMid = midImages[Math.floor(Math.random() * midImages.length)];
  document.getElementById("championImage").src = randomMid;
}

const adcImages = [
  "images/adc/ashe.jpg",
  "images/adc/jhin.jpg",
  "images/adc/twitch.jpg",
  "images/adc/draven.jpg",
  "images/adc/ezreal.jpg",
  "images/adc/jinx.jpg",
  "images/adc/tristana.jpg",
];

function getRandomAdc() {
  const randomAdc = adcImages[Math.floor(Math.random() * adcImages.length)];
  document.getElementById("championImage").src = randomAdc;
}

const supportImages = [
  "images/adc/ashe.jpg",
  "images/adc/jhin.jpg",
  "images/adc/twitch.jpg",
  "images/adc/draven.jpg",
  "images/adc/ezreal.jpg",
  "images/adc/jinx.jpg",
  "images/adc/tristana.jpg",
];

function getRandomAdc() {
  const randomSupport =
    supportImages[Math.floor(Math.random() * supportImages.length)];
  document.getElementById("championImage").src = randomSupport;
}
