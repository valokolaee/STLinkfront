export default  () => {
  const devices = [
    { id: 1, name: 'ASIC Miner #1', status: 'online', hashrate: '120 TH/s', temp: 68, efficiency: 95 },
    { id: 2, name: 'ASIC Miner #2', status: 'offline', hashrate: '0 TH/s', temp: 25, efficiency: 0 },
    { id: 3, name: 'GPU Rig #1', status: 'online', hashrate: '320 MH/s', temp: 72, efficiency: 88 },
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Mining Devices</h2>
      <div className="space-y-4">
        {devices.map(device => (
          <div key={device.id} className="p-4 bg-gray-700 rounded-lg border-l-4 border-l-green-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{device.name}</h3>
                <span className={`inline-block px-2 py-1 rounded text-xs ${
                  device.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {device.status.toUpperCase()}
                </span>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Manage
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
              <div>
                <p className="text-gray-400">Hash Rate</p>
                <p className="font-semibold">{device.hashrate}</p>
              </div>
              <div>
                <p className="text-gray-400">Temperature</p>
                <p className="font-semibold">{device.temp}°C</p>
              </div>
              <div>
                <p className="text-gray-400">Efficiency</p>
                <p className="font-semibold">{device.efficiency}%</p>
              </div>
              <div>
                <p className="text-gray-400">Uptime</p>
                <p className="font-semibold">24h 15m</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};