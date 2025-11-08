import { useBudgetContext } from "../../context/quickBudgetContext";

export const BtnDelete = ({id}:{id:number})=>{
    const {handlerDeleteItem} = useBudgetContext()

    return(
        <>
         <button onClick={()=>handlerDeleteItem(id)}>Delete</button>
        </>
    )
}