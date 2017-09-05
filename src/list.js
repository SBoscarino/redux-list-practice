import React from 'react';
import { connect } from 'react-redux';


const List = (props) => {
  return(
    <div>
      <h1>List</h1>
      <form onSubmit = {(evt) => props.submitItem(evt, props.value)}>
        <input value={props.value} onChange={props.changeText}/>
      </form>

      <ul>
      {props.list.map((item, i) => {
        return(<li key={i}>{item}</li>)
      })}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
    return {
      value : state.inputValue,
      list : state.list
    }
}

function mapDispatchToProps(dispatch){
  return{
    submitItem: (evt, text) => {
      evt.preventDefault();
      console.log('submitting', text)
      const action = {type : "SUBMIT", text: text};
      dispatch(action);
    },
    changeText: (evt) => {
      console.log('hey');
      const action = {type : "INPUT_CHANGE", text : evt.target.value}
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
