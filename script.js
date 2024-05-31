document.getElementById("ageForm").addEventListener("submit",getAge);

function getAge(event){
    event.preventDefault()
    const dobin = document.getElementById("dob")
    const datein = document.getElementById("date")
    const dob = dobin.value;
    const date = datein.value;
    console.log(`dob = ${dob}`)
    console.log(`date = ${date}`)

    // Extract year, month, and day from dob
    const [dobYear, dobMonth, dobDay] = dob.split('-');
    // Extract year, month, and day from date
    const [dateYear, dateMonth, dateDay] = date.split('-');


  
    
    const ageYear = dateYear - dobYear
  
        

    console.log(`Age Year - ${ageYear}`)


  



    


    document.getElementById("Age").innerHTML = `Age - ${ageYear}` 
    
    
}



