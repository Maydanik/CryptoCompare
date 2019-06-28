export const SEARCH_COINS = 'SEARCH_COINS';

//this function is action-creator
export const searchCoinsAction = userInputInSearchField => ({
  type: SEARCH_COINS,
  payload: userInputInSearchField,
});


// //REDUX WITHOUT REACT

// export const SEARCH_COINS = 'SEARCH_COINS';

// export function searchCoins(userInputInSearchField) {
//   return {
//     type: SEARCH_COINS,
//     payload: userInputInSearchField,
//   };
// };

// export const boundSearchCoins = userInputInSearchField => dispatch => dispatch(searchCoins(userInputInSearchField));