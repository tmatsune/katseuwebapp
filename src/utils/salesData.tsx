

type salesLis = {
        amount: number;
        items: { [key:symbol]: number; }//[key: string[]
}[]
export const getSalesTotal = ( sales:salesLis ):number => {
    var totalSales:number = 0;
    sales.forEach(sale => {
        //console.log(sale)
        totalSales += sale.amount
    })
    return totalSales
}
export const avgSalePrice = (sales:salesLis):number => {
    var avgSales:number = 0;
    sales.forEach(sale => {
        //console.log(sale)
        avgSales += sale.amount
    })
    avgSales = avgSales/sales.length
    return avgSales
}