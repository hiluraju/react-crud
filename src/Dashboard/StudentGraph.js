import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const StudentGraph = ({students}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  
   const data = {
    labels : students.map((s)=> s.name),
    datasets: [    
      {
        label: 'Student Marks',
        data: students.map((s)=> s.marks),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className=''>
      <Bar options={options} data={data} />
    </div>
  )
}

export default StudentGraph