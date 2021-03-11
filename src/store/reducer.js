import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputVal: 'Write something',
    listData: [],
}
const reducer = (state = defaultState, action) => {
    const { type, value } = action
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
    case CHANGE_INPUT:
        newState.inputVal = value
        return newState
    case ADD_ITEM:
        newState.listData.push(state.inputVal)
        return newState
    case DEL_ITEM:
        newState.listData.splice(value, 1)
        return newState
    case GET_LIST:
        newState.listData = value
        return newState
    default:
        return state
    }
}
export default reducer
