import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
  };
  
  textToTableRows=(myData)=>{
    var rows = myData.split('\n');
      this.arr = rows.reduce((arr, row)=>{
        arr.push(
          <tr>
            {row.split('|').map(el=><td>{el}</td>)}
          </tr>
        )
        return arr;
      }, []);
  }
  createTable=()=>{
    const { myData } = this.props;
    if(myData){
        this.textToTableRows(myData);
    }
  }

  render(){
    const { myData } = this.props;
    this.createTable();
    return (
      <div>
        <table>
         <tbody>
          {this.arr}
         </tbody>
        </table>
       <Pagination myData={this.arr}/>
      </div>
    );
  }
}

export default App;

const addParentBlock = el=><div>{el}</div>;
class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state= {currentPage: 1};
    }
    displayPages=noOfPages=>{
        console.log(noOfPages)
        this.buttons = [];
        // if(noOfPagescurrentPage){
        //     return;
        // } 
        for(let i=1; i<=noOfPages; i++){
            this.buttons.push(
            <button>{i}</button>
            )
        }
        return 
    }
    render(){ //
        const { myData } = this.props;

        const noOfPages = myData && Math.ceil(myData.length/10) || 0;
        this.displayPages(noOfPages);
        console.log(this.buttons)
        const render  = this.buttons.length ? addParentBlock(this.buttons) : null
        return(
            render
        );
    }
}
