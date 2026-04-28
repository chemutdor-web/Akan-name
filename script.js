
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
    // process the date
     let gender = genderInput.value;
     let date = new Date(birthday);GET

      let MM = date.getMonth() + 1;
      let DD = date.getDate(); 
      let YY = Year % 100;

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





