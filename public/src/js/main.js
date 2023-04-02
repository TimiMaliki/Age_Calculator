function calAge(year, birthday) {

  return year - birthday;

}




function age() {

  const myage = document.getElementById("myAge").value;
  


  let currentYear = new Date();
  let year = currentYear.getFullYear();

  let birthday = myage;

  let currentAge;
  if (year > myage) {
    birthday = birthday;

     currentAge =
      calAge(year, birthday);

    // calAge = year - birthday
  }
  else {
    console.log("no");
  }

  document.getElementById('check').innerText = "Your Year is " + currentAge

}


