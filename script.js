
//  main event
document.getElementById('Akan-form').addEventListener('submit',function(event){
    event.preventDefault();
// makes the birthday appear as a string
const birthday = document.getElementById("birthday").value; 
const gender = document.querySelector('input[name="gender"]:checked')
    // validation
    if(!birthday || !gender){
        alert("please select both your birthday and gender!");
        return;
    }
    
console.log("the selected gender is:" + gender);

     let date = new Date(birthday);
     
    
    //  extract date parts
    let MM = date.getMonth() + 1;
    let DD = date.getDate();
    let Year = date.getFullYear();

    // the formula (centuary and year of centuary)
    let CC = Math.floor(Year / 100);
    let YY = Year % 100;

    // this the calculation

    let d =
      Math.floor(CC / 4 -
        2 * CC -
        1 +
        Math.floor((5 * YY) / 4) +
        Math.floor((26 * (MM + 1)) / 10) +
        DD) %
      7;

    //   fix negative results
    let index = Math.floor(d);
    if (index < 0){
        index += 7;
    }
    console.log(" the selected gender is:" + gender);

// name arrays(must start with sunday)

 const  maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
 const  femaleNames = ["akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"];

    
    // match name and display
    let akanName="";
    if (gender === "male"){
        akanName= maleNames[index];

    } else {
      akanName = femaleNames[index];
    }
      console.log(" Your Akan name is:" + akanName);
    


    // Display result 
    document.getElementById("displayname").innerHTML ="Your Akan Name is <span>" + akanName + "</span>"

});