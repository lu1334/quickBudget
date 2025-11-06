
export const validateRequiredFields = (concept:string,amount:number)=>{
    if(concept.trim() === '' || isNaN(amount) || amount <=0 || !concept || !amount){
       alert('Please fill in all required fields with valid values.');
       return false;
    }
    else {
        concept = ""
        amount = 0
        alert("Entry added successfully!")
        return true
    }
}