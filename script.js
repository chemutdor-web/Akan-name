
//  main event
document.getElementById('Akan-form').addEventListener('submit',function(event){
    event.preventDefault();
let birthday = document.getElementById("birthday").value;
let genderInput = document.querySelector('input[name="gender"]:checked');
    // validation
    if(!birthday || !gender){
        alert("please select both your birthday and gender!");
        return;


let  maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 let femaleNames = ["akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"];

    // input values
    // let birthday = document.getElementById('birthday').value;
    let genderInput = document.querySelector('input[name="gender"]:checked').value;
    let display = document.getElementById('displayname');

    // validation makes sure they actually picked the gender
    if(!birthday || !gender){
        alert("please select both your birthday and gender!");
        return;
    }
    // get input values
      let gender = genderInput.value;
     let date = new Date(birthday);

    //  extract date parts
      let MM = date.getMonth() + 1;
      let DD = date.getDate(); 
      let Year = date.getFullYear();
      

    //   define century(cc) and year of the cenury (YY)
    let CC = Math.floor(year / 100);
    let YY = year % 100;

    let d = (((CC/4) -2 * CC - 1) + Math.floor(5 * YY / 4) + Math.floor(26 * (MM + 1) / 10) +DD) % 7;

    // get the index 
    // we use math.floor and the ensure the result is positive
    // fix negative result
    let index = Math.floor(d);
    if (index < 0){
        index += 7;
    }
    // match name and display
    let akanName="";
    if (gender=== "male"){
        akanName= malesNames[index]

    } else {
        akanName= femaleNames[index];
    }

    // Display result 
    document.getElementById("displayname").innerHTML =
      "Your Akan Name is <span>" +akanName;"</span>"

});