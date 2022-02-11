import { createStore, createLogger } from 'vuex'
import counterModule from './modules/counter'

export default  createStore({
    plugins: [createLogger()],
    modules: {
        count: counterModule
    }
})