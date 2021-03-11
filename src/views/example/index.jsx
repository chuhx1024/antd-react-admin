import React from 'react'
import store from '../../store'
export default class Example extends React.Component {
    state = store.getState()
    render () {
        return (
            <>
                <div>{this.state.inputVal}</div>
            </>
        )
    }
}
