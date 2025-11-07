

export const validateRequiredFields = (concept:string,amount:string,category:string)=>{
    if(concept.trim() === '' || Number(amount) <=0 || !concept || !amount || !category){
       alert('Please fill in all required fields with valid values.');
       return false;
    }
    else {
    
        alert("Entry added successfully!")
        return true
    }
}