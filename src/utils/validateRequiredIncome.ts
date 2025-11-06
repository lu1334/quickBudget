export function validateRiqueridIncome(income:string){
    if(/^[0-9]+$/.test(income)){
        return true
    }
    else{
        return false
    }
}