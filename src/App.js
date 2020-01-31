import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table.jsx';
import { throttle, debounce } from "throttle-debounce";
class App extends React.Component {
  constructor(props){
    super(props);
    this.setQueryDebounced = debounce(500, this.setQuery);
    this.setQueryThrottled = throttle(500, this.setQuery);
    this.state = {
      isJsonLoaded: false,
      myData: null,
      query: '',
      selectedPage: 1,

    };
  };
  handleFileSelect = (file) => {
    this.setState({loading: true})
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  }
  handleFileRead = (e) => {
    const content = this.fileReader.result;
    this.setState({
      loading: false,
      myData: JSON.parse(content)});
  };
  setQuery=(query)=>this.setState({query});
  onQueryChange=(e)=>{
    const value = e.target.value;
    if(value.length<5){
      this.setQueryDebounced(value);
    } else{
      this.setQueryDebounced(value);
    }
  }
  render(){
    console.log(this.state.query)
    const { myData, loading, selectedPage } = this.state;
    console.log(myData)
    const noOfSelectPages =  myData &&  (myData.length/10 > 5 ? 5 : Math.ceil(myData.length/10));
    let pages = ['<'];
    const displayData = myData && myData.slice((selectedPage-1)*10, 10);
    for(let i=0; i<noOfSelectPages; i++){
      pages.push(i);
      if(i===noOfSelectPages-1) pages.push('>');
      console.log(pages)
    }

    if(loading){
      return (
        <p>loading...</p>
      )
    }
    const Pages = pages.map(e=><li>{e}&nbsp;</li>)
    console.log(pages)

    if(!myData){
      return (
        <div className='App'>
          <form>
            <input
              type='text'
              placeholder='Search here..'
              onChange={this.onQueryChange}/>
          </form>
          <p><strong>Please select the JSOn file to be rendered</strong></p>
          <input type='file'
                id='file'
                className='input-file'
                accept='.json'
                onChange={e => this.handleFileSelect(e.target.files[0])}
            />
        </div>
      );
    }
    return (
      <div className="App">
        <Table myData={displayData}/>
        <ul style={{'display': 'inline'}}>{Pages}</ul>
      </div>
    );
  }
}

export default App;
