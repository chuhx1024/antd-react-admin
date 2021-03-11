import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './views/example'
import Home from './views/home'
import Dashboard from './views/dashboard'
import LineDemo from './views/echarts/LineDemo'
import PieDemo from './views/echarts/PieDemo'
import BarFirst from './views/echarts/barGroup/BarFirst'
import BarSecond from './views/echarts/barGroup/BarSecond'
function App () {
    return (
        <div>
            <section>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Dashboard}></Route>
                        <Route path="/echarts/lineDemo" exact component={LineDemo}></Route>
                        <Route path="/echarts/pieDemo" exact component={PieDemo}></Route>
                        <Route path="/echarts/lineDemo" exact component={Dashboard}></Route>
                        <Route path="/echarts/lineDemo" exact component={Dashboard}></Route>
                        <Route path="/echarts/barGroup/barFirst" exact component={BarFirst}></Route>
                        <Route path="/echarts/barGroup/barSecond" exact component={BarSecond}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/eg" component={Example}></Route>
                    </Switch>
                </BrowserRouter>
            </section>
        </div>
    )
}

export default App
