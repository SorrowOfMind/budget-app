import React from 'react';
import {useSelector} from 'react-redux';
import HSBar from "react-horizontal-stacked-bar-chart";
import '../styles/chart.css';

const Chart = () => {
    const income = useSelector(state => state.totalIncome);
    const expense = useSelector(state => Math.abs(state.totalExpense));

    const chartData = [{
        value: income,
        color: '#10B508'
    },{
        value: expense,
        color: '#DF2600'
    }]
    
    return (
        <div className="chart">
            <HSBar data={chartData} />
        </div>
    )
}

export default Chart;
