import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {CountUp,Countdown,InCount} from'./Actions/Actions'

  function App(props) {
    return (
      <div className='compteur'>
        <h2>Compteur</h2>
        <div>
          <button onClick={() => props.decrement()}>-</button>
          <input type="text" placeholder="0" onChange={(e)=>props.setCount(e.target.value)} value={props.count}/>
          {/* <div className='cnt'>{props.count}</div> */}
          <button onClick={() => props.increment()}>+</button>
        </div>

      </div>
    );
  }

  const mapDispatchToProps=(dispatch)=>{
    return {
      setCount:(a)=>dispatch(InCount(a)),
      increment:()=>dispatch(CountUp()),
      decrement:()=>dispatch(Countdown())
    }
  }
const mapStateToProps=(state)=>{
  return{
    count:state.count,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
