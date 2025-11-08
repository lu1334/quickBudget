

export const validateRequiredFields = (concept:string,amount:string,category:string)=>{
    const isValidAmount = /^\d+(\.\d{1,2})?$/.test(amount);
    if(concept.trim() === '' || !isValidAmount || !category){
       alert('Please fill in all required fields with valid values.');
       return false;
    }
    else {
    
        alert("Entry added successfully!")
        return true
    }
}