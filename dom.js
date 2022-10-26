// console.log(document);
// // //selectors
// //1. getElementById - returns an element of that id
// console.log('.....getElementById');
// const head=document.getElementById('heading')
// console.log(head);

// //2. getElementsByClassName - returns all elements of that class
// console.log('.....getElementsByClassName');
// const subhead=document.getElementsByClassName('sub')
// console.log(subhead);
// //to return by particular index
// console.log(subhead[0]);
// console.log(subhead[1]);

// //3. getElementsByTagName - returns all elements of that tag
// console.log('.....getElementsByTagName');
// const para=document.getElementsByTagName('p')
// console.log(para);
// //to return by particular index
// console.log(para[0]);
// console.log(para[1]);
// console.log(para[2]);

// //4. querySelector  - returns the first elements of tag,class
// console.log('.....querySelector');
// const query=document.querySelector('p')
// console.log(query);
// const queryid=document.querySelector('#heading')
// console.log(queryid);
// const queryclass=document.querySelector('.sub')
// console.log(queryclass);

// //5.querySelectorAll()- To return all matches (not only the first)
// console.log('.....querySelectorAll');
// const queryall=document.querySelectorAll('p')
// console.log(queryall);
// const queryallclass=document.querySelectorAll('.sub')
// console.log(queryallclass);

//change name
function changeName(){
    console.log('button clicked');
    const name=document.querySelector('#name');
    name.innerText="AYUBI";
}

//increment and decrement onclick
function increment(){
    const currentCountElement = document.querySelector('h4');
    const currentCount = Number(currentCountElement.innerText);
    const updatedCount = currentCount + 1;
    currentCountElement.innerText = updatedCount;
    if(updatedCount%5 ==0 && updatedCount != 0){
            currentCountElement.style.color = "red"
        }
        else{
            currentCountElement.style.color = ""
        }
}
function decrement(){
    const currentCountElement = document.querySelector('h4');
    const currentCount = Number(currentCountElement.innerText);
    const updatedCount = currentCount - 1;
    currentCountElement.innerText = updatedCount;
    if(updatedCount%5 ==0 && updatedCount != 0){
        currentCountElement.style.color = "red"
    }
    else{
        currentCountElement.style.color = ""
    }
}

//to change color of number when number is multiple of 5
// if(updatedCount%5 ==0 && updatedCount != 0){
//     currentCountElement.style.color = "red"
// }
// else{
//     currentCountElement.style.color = ""
// }


//navigation
const nav1=document.querySelector('.childnodes')
// console.log(nav1.childNodes);
// console.log(nav1.children);
// console.log(nav1.firstChild);
// console.log(nav1.firstElementChild);
// console.log(nav1.lastChild);
// console.log(nav1.lastElementChild);
// console.log(nav1.previousSibling);
// console.log(nav1.previousElementSibling);
// console.log(nav1.nextSibling);
// console.log(nav1.nextElementSibling);
// console.log(nav1.parentNode);
// console.log(nav1.parentElement);

//modift elements content
const p=document.querySelector('#modify')
console.log(p.textContent);
console.log(p.innerText);
console.log(p.innerHTML);