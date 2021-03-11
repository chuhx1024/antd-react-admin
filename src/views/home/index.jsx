import React from 'react'
import store from '../../store'
import styles from './index.module.scss'
export default class Home extends React.Component {
    state = store.getState()
    render () {
        return (
            <section className={styles.exampleContainer}>
                我是Home页面
                <div className={styles.mainTitle}>{this.state.inputVal}</div>
            </section>
        )
    }
}
