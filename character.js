likes = 0;

function likeBtn(event) {
    likes++;
    updateLikes();
    return;
}

function updateLikes() {
    //show likes
    document.getElementsByClassName('likeDis')[0].innerHTML = $ + likes;
}


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