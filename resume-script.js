let navbar=document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick= () => {
    navbar.classList.toggle('active');
}

window.onscroll=()=>
{
    navbar.classList.remove('active');
}

document.querySelectorAll('input [type="number"]').forEach(inputNumber=>{
    inputNumber.oninput=()=>{
        if(inputNumber.value.length>inputNumber.maxlength) inputNumber.value=inputNumber.value.slice(0,inputNumber.maxlength);
    };
});



function addNewWEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewEXPField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    let expOb=document.getElementById("exp");
    let expAddButtonOb=document.getElementById("expAddButton");
    expOb.insertBefore(newNode,expAddButtonOb);
}

// generating cv
function generateCV()
{
    let nameField=document.getElementById('name').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML= nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('emailT').innerHTML=document.getElementById('email').value;
    document.getElementById('contactT').innerHTML=document.getElementById('contact').value;
    // document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    document.getElementById('fbT').innerHTML=document.getElementById('fb').value;
    document.getElementById('instaT').innerHTML=document.getElementById('ig').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkd').value;
    document.getElementById('objectiveT').innerHTML=document.getElementById('objField').value;
    // we
    let wes=document.getElementsByClassName('weField');
    let str1="";
    for(let e of wes)
    {
        str1=str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML= str1;
    // aq
    let aqs=document.getElementsByClassName('aqField');
    let str2="";
    for(let e of aqs)
    {
        str2 =str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML= str2;
    // exp
    let exps=document.getElementsByClassName('expField');
    let str3="";
    for(let e of exps)
    {
        str3 =str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById('expT').innerHTML= str3;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}
function printCV()

{
    window.print();
}