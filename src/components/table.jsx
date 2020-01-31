import React from 'react';

class Table extends React.Component{
    render(){
        const {myData} = this.props;
        console.log(this.props);
        const headersObj={};
        myData.forEach(obj => {
            Object.keys(obj).forEach(key=>{
                if(!headersObj[key]) headersObj[key] = 1;
            });
            
        });
        const headers = Object.keys(headersObj);
        const Header = headers.map(header=><td>{header}</td>);
        const body = myData.map(obj=>{
            const Cell = headers.map(header=><td>{obj[header]}</td>);
            return (
                <tr>
                    <Cell/>
                </tr>
            );
        })
        // const cell = <
        const Cell = (obj)=> headers.map(header=><td>{obj[header]}</td>);
        const Body = myData.map(obj=><tr>{Cell(obj)}</tr>)
        

        return (
            <table>
                <thead>{Header}</thead>
                <tbody>{Body}</tbody>
            </table>
        )
    };
}

export default Table;