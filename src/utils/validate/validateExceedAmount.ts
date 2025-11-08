
export const validateExeedAmount =(income:number,expenses:number)=>{ 
    if(income < expenses) return false
    return true
}