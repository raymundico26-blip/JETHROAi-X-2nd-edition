
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { MetricData } from '../types';

interface MetricsChartProps {
  data: MetricData[];
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data }) => {
  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 h-full flex flex-col backdrop-blur-sm shadow-inner min-h-[250px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-slate-400 text-[10px] font-mono uppercase tracking-widest font-bold">V8 Runtime Performance</h3>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse delay-75" />
        </div>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%" minHeight={150}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorV8" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBlink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} opacity={0.3} />
            <XAxis dataKey="name" stroke="#475569" fontSize={8} tickLine={false} axisLine={false} hide />
            <YAxis stroke="#475569" fontSize={8} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' }}
              itemStyle={{ padding: '0px' }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '9px', paddingTop: '10px' }} />
            <Area 
              type="monotone" 
              dataKey="v8" 
              name="V8 Heap"
              stroke="#818cf8" 
              fillOpacity={1} 
              fill="url(#colorV8)" 
              strokeWidth={2}
              isAnimationActive={false}
            />
            <Area 
              type="monotone" 
              dataKey="blink" 
              name="Blink Nodes"
              stroke="#2dd4bf" 
              fillOpacity={1} 
              fill="url(#colorBlink)" 
              strokeWidth={2}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
