import { createSlice } from '@reduxjs/toolkit';
import { apiRequest } from './api';
import { GET_COINLIST } from '../constants/urls';
import Toast from 'react-native-root-toast';

export const slice = createSlice({
    name: 'coin',
    initialState: {
        coins: '',
    },
    reducers: {
        getCoins: (coin, action) => {
            coin.coins = action.payload
        }
    }
});

export const { getCoins } = slice.actions;
export default slice.reducer;

export const getCoinsDetails = (userId) => (dispatch) => {
    const url = GET_COINLIST;
    const body = 'user_id=' + userId;

    dispatch(apiRequest({
        url,
        method: 'POST',
        data: body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        onSuccess: getCoins.type,
        onError: getCoins.type,
    }))

    
 // Add a Toast on screen.
//  ++firstLoad 
//  if (firstLoad <= 1) {
//     Toast.show('fetch Successfully', {
//     duration: Toast.durations.LONG,
//     position: Toast.positions.TOP,
//     shadow: true,
//     animation: true,
//     hideOnPress: true,
//     delay: 0,
//     onShow: () => {
//         // calls on toast\`s appear animation start
//     },
//     onShown: () => {
//         // calls on toast\`s appear animation end.
//     },
//     onHide: () => {
//         // calls on toast\`s hide animation start.
//     },
//     onHidden: () => {
//         // calls on toast\`s hide animation end.
//     }
// });     
// ++firstLoad;
// console.log(firstLoad)
//  }
 
// Toast.show('fetch Successfully', {
//     duration: Toast.durations.LONG,
//     position: Toast.positions.TOP,
//     shadow: true,
//     animation: true,
//     hideOnPress: true,
//     delay: 0,
//     onShow: () => {
//         // calls on toast\`s appear animation start
//     },
//     onShown: () => {
//         // calls on toast\`s appear animation end.
//     },
//     onHide: () => {
//         // calls on toast\`s hide animation start.
//     },
//     onHidden: () => {
//         // calls on toast\`s hide animation end.
//     }
// });
};

// Selector
export const coinsDetails = state => state.entities.coinsList.coins.Data