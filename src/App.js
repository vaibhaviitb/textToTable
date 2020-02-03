import React from 'react';
import logo from './logo.svg';
import './App.css';
import { throttle, debounce } from "throttle-debounce";
import 'bootstrap/dist/css/bootstrap.css';
import ReadFile from './components/readFile';
import Table from './components/tables2'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={myData: null};
  };
  setInputText=(data)=>this.setState({myData: data});
  render(){
    const { myData } = this.state;

    if(!myData){
      return (
        <div className='App'>
          <ReadFile setData={this.setInputText} setLoading={this.setLoading}/>
        </div>
      );
    }
    return (
      <Table myData={myData}/>
    );
  }
}

export default App;
