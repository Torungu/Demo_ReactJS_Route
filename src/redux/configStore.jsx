//Tự type import-export setup Store
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
        //Nơi chứa state của ứng dụng
        fontSize: (state = 20, action) => {
            console.log('action 1', action)
            // if (action.type === 'TANG_FONTSIZE') {
            //     state += action.payload
            // }
            // else if (action.type === 'GIAM_FONTSIZE') {
            //     state -= action.payload
            // }
            // return state
            switch (action.type) {
                case 'TANG_GIAM_FONTSIZE': {
                    state += action.payload
                    return state
                }
                default: return state;
            }
        },
        imgSrc: (state = './img/red-car.jpg', action) => {
            console.log('action 2', action)
            switch (action.type) {
                case 'CHANGE_COLOR': {
                    state = action.payload
                    return state;
                }
                default: return state
            }
        },
        // arrNguoiDungReducer: 

        // ????????????
    }
})