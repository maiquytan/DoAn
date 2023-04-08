
import {Bar} from 'react-chartjs-2';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
  {
      name: 'MongoDb',
      student: 11,
      fees: 60
  },
  {
      name: 'Javascript',
      student: 15,
      fees: 12
  },
  {
      name: 'PHP',
      student: 5,
      fees: 10
  },
  {
      name: 'Java',
      student: 10,
      fees: 5
  },
  {
      name: 'C#',
      student: 9,
      fees: 4
  },
  {
      name: 'C++',
      student: 10,
      fees: 8
  },
];

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

export default function ChartIncome() {

  return (
    <div>
        <>
            
            <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={pdata} margin={{ right: 60, top: 30 }} height="400px">
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="blue" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
      </div>
  )
}
