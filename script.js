
//  main event
document.getElementById('akanForm').addEventListener('submit',function(event){
    event.preventDefault();

const maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 const femaleNames = ["akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"];

    // input values
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const display = document.getElementById('displayname');

    // validation
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
    let CC = Math.floor(year /100);
    let YY = year % 100;

    let d = (((CC/4) -2 * CC - 1) + Math.floor(5 * YY / 4) + Math.floor(26 * (MM + 1) / 10) +DD) % 7;

    // get the index 
    // we use math.floor and the ensure the result is positive
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

    // Display result 
    document.getElementById('display').innerHTML = akanName;

});