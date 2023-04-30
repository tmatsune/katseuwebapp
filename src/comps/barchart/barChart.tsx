
import "./barChart.css"
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import { useState, useEffect } from "react";
import { prosData } from "../../utils/processData";


Chart.register(CategoryScale);
type bstSale = {
    title: string; 
    sold: number;
}[]

function BarChart(){
    const [loading, setLoading] = useState<boolean>(false)
    const [shirtLables, setShirtLabels] = useState<string[]>([]);
    const [shirtSales, setShirtSales] = useState<number[]>([]);

    const getSalesData = async() => {
        const url = "http://localhost:8000/v2/adminSale/procData";
        setLoading(true);
        const res = await fetch(url, {
            method: "get",
            headers: {"Content-Type":"application/json"},
        }).then(res => res.json());
        setLoading(false);
        //console.log(res)
        var data = prosData(res);
        setItems(data);
    }
    const setItems = async(data:bstSale) => {
        const titles:string[] = [];
        const sold:number[] = [];
        data.forEach((item) => {
            var nwLabel = item.title
            var nwSold = item.sold
            titles.push(nwLabel)
            sold.push(nwSold);
        })
        setShirtLabels(titles)
        setShirtSales(sold)
    }
    useEffect(() => {
        getSalesData();
    },[])

const data = {
  labels: shirtLables,//["shirt", "shirt", "shirt", "shirt", "shirt"]
  datasets: [{
    label: 'Top Sellers',
    data: shirtSales,//[65, 59, 80, 81, 56]
    backgroundColor: [
      'rgba(255, 99, 132, 0.4)',
      'rgba(255, 159, 64, 0.4)',
      'rgba(255, 205, 86, 0.4)',
      'rgba(75, 192, 192, 0.4)',
      'rgba(54, 162, 235, 0.4)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
    ],
    borderWidth: 1
  }]
};

    return(
        <div>
            <Bar height={400} width={600} data={data}></Bar>
        </div>
    )
}
export default BarChart;
