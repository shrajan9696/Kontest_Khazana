
let container = document.getElementById("container");

let hacker_rank = document.getElementById("hacker_rank");
let codeforces = document.getElementById("codeforces");
let codechef = document.getElementById("code_chef");
let leetcode = document.getElementById("leet_code");
let hackerearth = document.getElementById("hacker_earth");
let at_coder = document.getElementById("at_coder");




const render = function(data,name)
{
 // let color = "red";
 //  if(name=="codeforces"){
 //    color="green";
 //  }
 //  else if(name == "hacker_rank"){
 //    color="yellow";
 //  }
  data.forEach((obj)=>{

const old = document.getElementById("container");
const date = obj.start_time;
  const d = date.slice(0,10);

const html = `

 <div class="container">
<h1 > ${name} </h1>
<h1 > ${obj.name}   <span style="    margin-left: 3px;
    background-color: aliceblue;
    color: navy;" >${d} </span></h1>

  <table class="table table--shaded">

    <tbody class="table__body">
      <tr class="table__row">
        <td class="table__cell table__cell--checkbox table__cell--no-wrap">
<!--           <input type="checkbox"> -->
        </td>
        <td class="UserTable__name table__cell table__cell--no-wrap">Name</td>
        <td class="table__cell table__cell--remainder" >${obj.name}</td>
      </tr>

      <tr class="table__row">
        <td class="table__cell table__cell--checkbox table__cell--no-wrap">
<!--           <input type="checkbox"> -->
        </td>
        <td class="UserTable__name table__cell table__cell--no-wrap">URL</td>
        <td class="table__cell table__cell--remainder"><a href="${obj.url}" target="_blank" style="color:white;background-color:black;">${obj.url}</td>
      </tr>

      <tr class="table__row">
        <td class="table__cell table__cell--checkbox table__cell--no-wrap">
<!--           <input type="checkbox"> -->
        </td>
        <td class="UserTable__name table__cell table__cell--no-wrap">Start Time</td>
        <td class="table__cell table__cell--remainder" style="    font-weight: bold;
    font-family: cursive;">${obj.start_time}</td>
      </tr>

      <tr class="table__row">
        <td class="table__cell table__cell--checkbox table__cell--no-wrap">
<!--           <input type="checkbox"> -->
        </td>
        <td class="UserTable__name table__cell table__cell--no-wrap">End Time</td>
        <td class="table__cell table__cell--remainder">${obj.end_time}</td>
      </tr>

    </tbody>
  </table>
 </div>
`

    container.insertAdjacentHTML('afterbegin',html);
    // old.replaceChild(html, old);
})

}




const call = function(name){
  fetch(`https://kontests.net/api/v1/${name}`)
   .then((response) =>{
     console.log(response);
     return response.json();
   })
   .then((data)=>{
     console.log(data)
     render(data,name);
   })
   .catch((err)=>{console.log(err)});

}


hacker_rank.addEventListener("click",()=>{
  container.innerHTML = "";
  console.log(hacker_rank.value);
  call(hacker_rank.value);
});

codeforces.addEventListener("click",()=>{
  container.innerHTML = "";
  console.log(codeforces.value);
  call(codeforces.value);
});

codechef.addEventListener("click",()=>{
  container.innerHTML = "";
  console.log(codechef.value);
  call(codechef.value);
});

leetcode.addEventListener("click",()=>{
  container.innerHTML = "";
  console.log(leetcode.value);
  call(leetcode.value);
});

hackerearth.addEventListener("click",()=>{
  container.innerHTML = "";
  console.log(hackerearth.value);
  call(hackerearth.value);
});

at_coder.addEventListener("click",()=>{
  container.innerHTML = "";
  console.log(at_coder.value);
  call(at_coder.value);
});
