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
