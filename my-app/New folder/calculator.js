import React from 'react';
import ReactDOM from 'react-dom';
import './styleSheet.css';



function Square(props) {
    return (
        <button className="square" onClick = {props.onClick}>{props.value}
        </button>
    );
}

class inputControlls extends React.Component {

    renderSquare(i,j) {
        return (
            <Square
                value = {j}
                onClick = {()=>this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="CalcRow"> 
                    {this.renderSquare(0,7)}
                    {this.renderSquare(1,8)}
                    {this.renderSquare(2,9)}
                    {this.renderSquare(3,"/")}
                </div>
                <div className="CalcRow"> 
                    {this.renderSquare(4,4)}
                    {this.renderSquare(5,5)}
                    {this.renderSquare(6,6)}
                    {this.renderSquare(7,"-")}
                </div>
                <div className="CalcRow"> 
                    {this.renderSquare(8,1)}
                    {this.renderSquare(9,2)}
                    {this.renderSquare(10,3)}
                    {this.renderSquare(11,"+")}
                </div>
                <div className="CalcRow"> 
                    {this.renderSquare(12,"(-)")}
                    {this.renderSquare(13,0)}
                    {this.renderSquare(14,".")}
                    {this.renderSquare(15,"*")}
                </div>
            </div>
        );
    }
}