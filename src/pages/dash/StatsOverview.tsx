export default () => {
  const stats = [
    { label: 'Total Hash Rate', value: '450 TH/s', change: '+5.2%', positive: true },
    { label: '24h Revenue', value: '0.0084 BTC', change: '+2.1%', positive: true },
    { label: 'Active Devices', value: '8/10', change: '-1', positive: false },
    { label: 'Power Consumption', value: '4.2 kW', change: '-0.3%', positive: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold">{stat.value}</p>
            <span className={`text-sm ${
              stat.positive ? 'text-green-400' : 'text-red-400'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};