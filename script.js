function Click() {

    event.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    let Male = document.getElementById("Male");
    let Female = document.getElementById("Female");

    // Validate the date and month
    if (day <= 0 || day > 31) {
        alert('Please enter a valid day.');
        return;
    }
    if (month <= 0 || month > 12) {
        alert('Please enter a valid month.');
        return;
    }

    // Calculate the day of the week
    let DD = day;
    let MM = month;
    let CC = Math.ceil(year / 100);
    const YY = Math.ceil(year % 100);
    const d = Math.ceil(Math.ceil(Math.ceil( Math.ceil(CC/4) -2*CC-1) + (Math.ceil(5*YY/4) ) + (Math.ceil(26*(MM+1)/10)) + DD ) % 7)+1;
   
    // Akan names
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    console.log(d)
    // Determine the Akan name
    let akanName = "";
    if (Male.checked) {
        akanName = maleNames[d];
    } else if(Female.checked) {
        akanName = femaleNames[d];
    }

    // Display the result
    
    document.getElementById('result').innerHTML = "Your Akan name is " + akanName;
}
