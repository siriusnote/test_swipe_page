
// @ts-ignore
import { createStore } from "vuex"

export const store = createStore({
    state: {
        mode: 1
    },
    mutations: {
        updateMode (state: any, mode: number) {
            state.mode = mode
        }
    }
})