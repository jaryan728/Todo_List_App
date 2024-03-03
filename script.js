let lastindex=1;
function doit()
{
    let item=desc.value;
    localStorage.setItem(`${lastindex}`,`${item}`);
    let li=document.createElement('li');
    li.setAttribute('id',`${lastindex}`);
    li.setAttribute('class','itemvalue');
    li.innerHTML=`<div>${lastindex}</div><div>${item}</div>
   <div> <button onclick="di(${lastindex})">Done</button></div>`;
    let a=document.getElementsByClassName('list')[0];
    a.appendChild(li);
    lastindex=lastindex+1;
    desc.value=" ";

}
function di(lastindex) {
    let a = `${lastindex}`;
  
    localStorage.removeItem(a);
  
    let elementToRemove = document.getElementById(a);
      elementToRemove.remove();
      a.innerHTML=""; 
}
function deleteit()
{
    localStorage.clear();
    let a=document.getElementsByClassName('main')[0];

a.remove();
let ele=document.createElement('div');
ele.innerHTML="Empty List!!!!";
ele.setAttribute('class','del');
document.body.append(ele);
}