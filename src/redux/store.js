// 解构1: 创建数据中心, 解构2: 管理中间件
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store