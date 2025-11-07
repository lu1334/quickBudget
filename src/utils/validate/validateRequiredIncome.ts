export function validateRiqueridIncome(income:string){
    if(/^\d+(\.\d{1,2})?$/.test(income)){
        return true
    }
    else{
        return false
    }
}