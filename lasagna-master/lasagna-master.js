/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
  switch (timeLeft) {
    case 0:
      return 'Lasagna is done.';
    case undefined:
      return 'You forgot to set the timer.';
    default:
      return 'Not done, please wait.'
  }
}

export function preparationTime(layersArr, timePerLayer) {
  return (layersArr.length) * (timePerLayer ?? 2);
}

export function quantities(layersArr) {
  let noodlesLayers = 0;
  let sauceLayers = 0;

  for (let i = 0; i < layersArr.length; i++) {
    switch (layersArr[i]) {
      case 'noodles':
        noodlesLayers++;
        break;
      case 'sauce':
        sauceLayers++;
        break;
    }
  }
  
  return {
    noodles: noodlesLayers * 50,
    sauce: sauceLayers * 0.2,
  }
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let newRecipe = {};

  for (let ingredient in recipe) {
    newRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  return newRecipe;
}