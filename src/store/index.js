import { createStore } from "vuex"

const store = createStore({
    state: {
        mode: 1
    },
    mutations: {
        updateMode (state, mode) {
            state.mode = mode
        }
    }
})

export default store