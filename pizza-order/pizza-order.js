/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

let PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
}

export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) return PRICES[pizza];
  let [extra, ...rest] = extras;
  return PRICES[extra] + pizzaPrice(pizza, ...rest);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, pizzaOrder) => {
    const { pizza, extras } = pizzaOrder;
    return total + pizzaPrice(pizza, ...extras);
  }, 0);
}
