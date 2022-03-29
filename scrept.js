function saveData()
{
let fname,lname,email,text;
fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;
email=document.getElementById("email").value;
text=document.getElementById("text").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "fname":fname,
  "lname":lname,
  "email":email,
  "text":text
})
localStorage.setItem("users",JSON.stringify(user_records));
}

}

