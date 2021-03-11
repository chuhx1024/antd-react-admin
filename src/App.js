import { Button } from 'antd'
import { BrowserRouter, Route } from 'react-router-dom'
import Example from './views/example'
import Home from './views/home'
function App () {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type="primary">Button</Button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Example />
            </header>
            <section>
                <BrowserRouter>
                    <Route path="/eg" component={Example}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/order" component={Example}></Route>
                </BrowserRouter>
            </section>
        </div>
    )
}

export default App
