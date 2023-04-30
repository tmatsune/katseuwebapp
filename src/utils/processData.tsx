
type sale = {
    [key:string]: {
        title : string,
        sold : number
    }
}
type bstSale = {
    title: string; 
    sold: number;
}

export const prosData = ( obj:sale ) => {
    //take average of sales and get top 5 above average;
    var average: number = 0;
    Object.keys(obj).forEach((k,v) => {
        //console.log(obj[k])
        var curNm = obj[k].sold
        average += curNm
    })
    const bstSels:bstSale [] = []
    //console.log(average/Object.keys(obj).length)
    average = average/Object.keys(obj).length
    
    Object.keys(obj).forEach((k,v) => {
        var curNm = obj[k].sold
        if(curNm > average){
            bstSels.push(obj[k]);
        }
    })
    return bstSels.slice(0,5)
}

export const allClotheSales = (obj:sale) => {
    const titles:string[] = [];
    const itemSold:number[] = [];
    Object.keys(obj).forEach(key => {
        //if(obj[key].sold > 0){
            titles.push(obj[key].title)
            itemSold.push(obj[key].sold)
        //}
    })
    return [titles, itemSold]
}