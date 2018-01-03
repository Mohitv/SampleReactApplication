import {combineReducers} from "redux"
import TopLevelNavReducer from './reducer_toplevelnav'
import TopLevelResourcesReducer from './reducer_toplevelResource'
const rootReducer = combineReducers({
    topLevelNavs:TopLevelNavReducer,
    topLevelResources:TopLevelResourcesReducer
})

export default rootReducer