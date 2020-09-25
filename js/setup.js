'use strict';
document.querySelector(`.setup`).classList.remove(`hidden`);
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионого`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const NUMBER_OF_WIZARDS = 4;
const generateRandomInteger = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
const persSettings = [];
const generateSettings = (numberOfElements) => {
  for (let i = 0; i < numberOfElements; i++) {
    const persSetup = {
      name: `${NAMES[generateRandomInteger(0, NAMES.length - 1)]} ${SURNAMES[generateRandomInteger(0, SURNAMES.length - 1)]}`,
      coatColor: `${COAT_COLORS[generateRandomInteger(0, COAT_COLORS.length - 1)]}`,
      eyesColor: `${EYES_COLORS[generateRandomInteger(0, EYES_COLORS.length - 1)]}`
    };
    persSettings.push(persSetup);
  }
  return persSettings;
};
const settings = generateSettings(NUMBER_OF_WIZARDS);
const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardContainer = document.querySelector(`.setup-similar-list`);
const createWizard = (settingsWizard) => {
  const newWizard = wizardTemplate.cloneNode(true);
  newWizard.querySelector(`.setup-similar-label`).textContent = `${settingsWizard.name}`;
  newWizard.querySelector(`.wizard-coat`).style.fill = `${settingsWizard.coatColor}`;
  newWizard.querySelector(`.wizard-eyes`).style.fill = `${settingsWizard.eyesColor}`;
  return newWizard;
};
const renderWizards = (numberOfWizards) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfWizards; i++) {
    fragment.appendChild(createWizard(settings[i]));
  }
  wizardContainer.appendChild(fragment);
  document.querySelector(`.setup-similar`).classList.remove(`hidden`);
};
renderWizards(NUMBER_OF_WIZARDS);


