
import "./donutChart.css"
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import { useState, useEffect } from "react";
import { allClotheSales } from "../../utils/processData";

Chart.register(CategoryScale);
type num = {
    n : number
}

function DonutChart({n}:num){
    const [loading, setLoading] = useState<boolean>(false)
    const [titles, setTitles] = useState<any[]>([]);
    const [vals, setVals] = useState<any[]>([])

    const getSales = async() => {
        setLoading(true)
        const url = "http://localhost:8000/v2/adminSale/procData";
        const res = await fetch(url, {
            method: "get",
            headers: {"Content-Type":"application/json"},
        }).then(res => res.json());
        setLoading(false);
        var data = allClotheSales(res)
        setTitles(data[0])
        setVals(data[1])
    }
    useEffect(() => {
        getSales();
    }, [])

var data = {
  labels: titles,
  datasets: [
    {
      label: 'Sold',
      data: vals,
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

    return (
        <div id="donutDiv">
            <Doughnut height={240} width={240} data={data}></Doughnut>
        </div>
    )

}
export default DonutChart