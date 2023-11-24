import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calculateAverage = () => (good - bad) / (good + bad + neutral);
  const calculatePositivePercentage = () => (good / (good + bad + neutral)) * 100 ;
  
  return (
    <div>
      <div>
         <h1>give feedback</h1>
        <div>
          <Button handleClick={() => setGood(good + 1)} btnName='good'/>
          <Button handleClick={() => setNeutral(neutral + 1)} btnName='neutral'/>
          <Button handleClick={() => setBad(bad+1)} btnName='bad'/>
        </div >
      </div>

      <Statistics good={good} bad={bad} neutral={neutral}
                  average={calculateAverage()} positive={`${calculatePositivePercentage()} %`}
      />
    </div>
  )
}

const Button = (props) => {
  const {handleClick, btnName} = props;
  return <button onClick={handleClick}>{btnName}</button>
}


const Statistics = (props) => {

  const { good, bad, neutral, average, positive } = props;
  let all = good + bad + neutral;

  return (
    <>
     <h1>statistics</h1>
      { 
        all === 0
          ? <p>No feedback given</p>
          : <table>
                <tbody>
                    <StatisticsLine text="good" value={good}/>
                    <StatisticsLine text="neutral" value={neutral}/>
                    <StatisticsLine text="bad" value={bad}/>
                    <StatisticsLine text="all" value={all}/>
                    <StatisticsLine text="average" value={average}/>
                    <StatisticsLine text="positive" value={positive}/>
                </tbody>
            </table>
      }
    </>
  )
}

const StatisticsLine = (props) => {
  const { text, value } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}


export default App