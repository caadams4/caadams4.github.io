import React from 'react';
import ReactDOM from 'react-dom';
import './styleSheet.css';

class Likes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likeNum: 0,
            liked: false,
        };
    }

    render() {
        if (liked) {
            <button onClick={this.increase}>
                Likes: {likeNum++}
            </button>
        return;
        }
    }

    increase() {
        this.likeNum++;
        alert(likeNum)
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(Likes), domContainer);



/*
let arr = [{name: "charlie", age: 26},{name:"jack", age:24},{name: "beau", age:24},{name: "ben", age:13}]
undefined
arr.sort(el=>el.age)
(4) [{…}, {…}, {…}, {…}]
0: {name: 'charlie', age: 26}
1: {name: 'jack', age: 24}
2: {name: 'beau', age: 24}
3: {name: 'ben', age: 13}
length: 4
[[Prototype]]: Array(0)
arr.filter(el=>el.age >= 21)
(3) [{…}, {…}, {…}]
0: {name: 'charlie', age: 26}
1: {name: 'jack', age: 24}
2: {name: 'beau', age: 24}
length: 3
[[Prototype]]: Array(0)
*/