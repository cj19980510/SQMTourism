import { combineReducers } from 'redux'
import loginReducer from './home/loginReducer'
import regReducer from './home/regReducer'
import mynoteReducer from './mine/mynoteReducer'
import myorderReducer from './mine/myorderReducer'
import proReducer from './shop/proReducer'
import detailReducer from './shop/detailResucer'
import mycartReducer from './mine/mycartReducer'
import getnoteReducer from './note/getnoteReducer'
import getcommReducer from './note/getcommReducer'
import mycollectReducer from './mine/mycollectReducer'
import mycommentReducer from './mine/mycommentReducer'
import sightareaReducer from './sight/sightareaReducer'
import areadetailReducer from './sight/areadetailReducer'
import sightdetailReducer from './sight/sightdetailReducer'
import mineorderReducer from './mine/mineorder'
import pathReducer from './path/pathReducer'
const rootReducer = combineReducers({
    loginReducer, regReducer, mynoteReducer, myorderReducer, proReducer, detailReducer,
    mycartReducer, sightdetailReducer, pathReducer, mineorderReducer,
    getnoteReducer, getcommReducer, mycollectReducer, mycommentReducer, sightareaReducer, areadetailReducer
})
export default rootReducer