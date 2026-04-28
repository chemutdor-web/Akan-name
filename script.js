
//  main event
document.getElementById('Akan-form').addEventListener('submit',function(event){
    event.preventDefault();
let birthday = document.getElementById("birthday").value;
let genderInput = document.querySelector('input[name="gender"]:checked');
    // validation
    if(!birthday || !gender){
        alert("please select both your birthday and gender!");
        return;
    }
    let gender = genderInput.value;
    console.log("the selected gender is:" + gender);
// now we can define gender

     let date = new Date(birthday);
     let gender = genderInput.value;
    
    //  extract date parts
    let MM = date.getMonth() + 1;
    let DD = date.getDate();
    let Year = date.getFullYear();

    // the formula (centuary and year of centuary)
    let CC = Math.floor(year / 100);
    let YY = year % 100;

    // this the calculation

    let d =
      (CC / 4 -
        2 * CC -
        1 +
        Math.floor((5 * YY) / 4) +
        Math.floor((26 * (MM + 1)) / 10) +
        DD) %
      7;

    //   fix negative resultslet index = Math.floor(d);
    if (index < 0){
        index += 7;
    }

// name arrays(must start with sunday)

 const  maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
 const  femaleNames = ["akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"];

    
    // match name and display
    let akanName="";
    if (gender=== "male"){
        akanName= malesNames[index];

    } else {
        akanName= femaleNames[index];
    }

    // Display result 
    document.getElementById("displayname").innerHTML ="Your Akan Name is <span>" +akanName;"</span>"

});