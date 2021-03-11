import React from 'react'
import store from '../../store'
import styles from './index.module.scss'
export default class Example extends React.Component {
    state = store.getState()
    render () {
        return (
            <section className={styles.exampleContainer}>
                <div className={styles.mainTitle}>{this.state.inputVal}</div>
            </section>
        )
    }
}
