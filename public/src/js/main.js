function age(){

  let myage = document.getElementById("myAge").value;
  let display = document.getElementById("check").value;
   

  let yr1 = new Date();
  let year = yr1.getFullYear();

    birthday = myage;

  if( year > myage){
    birthday = birthday;
    calAge = year - birthday
  }
  else{
    console.log("no");
  }

document.getElementById('check').innerText = "Your Year is " + calAge

}
age();

