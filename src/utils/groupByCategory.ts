import type { Item ,Retorno} from "../types/types";

export function groupByCategory(listItem:Item[]){
   return listItem.reduce((acc,item)=>{
        const catg= item.category
        if(!acc[catg])acc[catg]=[]
        acc[catg].push(item)
        return acc
   },{} as Retorno)
}