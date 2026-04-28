getElementById('akanForm').addEventListener('submit', function(e){
    ventDefault();
}

birthdayInput= document.getElementById('birthday').ariaValue;
gender= document.querySelectir('input[name="gender"]:checked').value;
resultDisplay= document.getElementById('displayname');

// data array for names
maleNames = ["kwasi","kwado","kwabena","kwaku","yaw","kofi","kwame"]
femaleNames = ["akosua","Adwoa","Abena","Akua","yaa","Afua","Ama"]
daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]