import {ADD_BUDGET} from './constants'

export function addBudget(budget) {
    return {
      type: ADD_BUDGET,
      payload: budget,
    };
  }