 const maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 const femaleNames = ["akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"];
//  main event
document.getElementById('akanForm').addEventListener('submit',function(event){
    event.preventDefault();

    // input values
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const display = document.getElementById('displayname');

    // validation
    if(!birthday || !gender){
        alert("please select both your birthday and gender!");
        return;
    }
    // process the date
    const dateParts = birthday.split("-");
    const yearStr = dateParts[0];
    const MM = parseInt(dateParts[1]);
    const DD = parseInt(dateParts[2]);

    let d = (((CCC/4) -2*CC-1) +((5*YY/4)) +((26*(MM+1)/10)) +DD) %7;
    let index = Math.floor(d);
    if (index < 0){
        index = index + 7;
    }
    // match name and display
    let akanName="";
    if (gender=== "male"){
        akanName= malesNames[index]

    } else {
        akanName= femaleNames[index];

    }
    display.innerHTML = your Akan name is <str









resultDisplay = document.getElementById("displayname");


daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
