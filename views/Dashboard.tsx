import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';
import { MOCK_CHART_DATA } from '../constants';
import { Activity, Zap, Clock } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Weekly Progress</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-nexus-dark border border-nexus-gray rounded-xl p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500">
              <Zap size={24} />
            </div>
            <div className="text-nexus-muted text-sm">Total Calories</div>
          </div>
          <div className="text-3xl font-bold text-white">2,920 <span className="text-sm text-nexus-muted font-normal">kcal</span></div>
        </div>

        <div className="bg-nexus-dark border border-nexus-gray rounded-xl p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-nexus-primary/20 p-3 rounded-lg text-nexus-primary">
              <Clock size={24} />
            </div>
            <div className="text-nexus-muted text-sm">Active Minutes</div>
          </div>
          <div className="text-3xl font-bold text-white">320 <span className="text-sm text-nexus-muted font-normal">min</span></div>
        </div>

        <div className="bg-nexus-dark border border-nexus-gray rounded-xl p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-purple-500/20 p-3 rounded-lg text-purple-500">
              <Activity size={24} />
            </div>
            <div className="text-nexus-muted text-sm">Workouts</div>
          </div>
          <div className="text-3xl font-bold text-white">6 <span className="text-sm text-nexus-muted font-normal">sessions</span></div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Calorie Burn Chart */}
        <div className="bg-nexus-dark border border-nexus-gray rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Calories Burned</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="day" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#f4f4f5' }}
                  cursor={{fill: '#27272a'}}
                />
                <Bar dataKey="calories" fill="#a3e635" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Duration Chart */}
        <div className="bg-nexus-dark border border-nexus-gray rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Duration (Minutes)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="day" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#f4f4f5' }}
                />
                <Line type="monotone" dataKey="duration" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};