import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>)
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  return(
    <div>
    <h1>Statistics</h1>
    <table>
      <tbody>
      <tr><th>Statistics</th>
         <th>Value</th>
      </tr>
      <tr><StatisticLine text="good" value={props.good} /></tr>
      <tr><StatisticLine text="neutral" value={props.neutral} /></tr>    
      <tr><StatisticLine text="good" value={props.good} /></tr>
      <tr><StatisticLine text="bad" value={props.bad} /></tr>
      <tr><StatisticLine text="all" value={total} /></tr>
      <tr><StatisticLine text="average" value={(props.good-props.bad)/total} /></tr>
      <tr><StatisticLine text="positive" value={(props.good/total)*100}/></tr>
      </tbody>
      </table>
    </div>  
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div style={{padding: 100}}>
      <h1>  give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text="good" />
      <Button onClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={()=>setBad(bad+1)} text="bad"/>  
      {good === 0 && neutral === 0 && bad === 0 ? <p>  No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad}/>}
    </div>
  )
}
export default App
