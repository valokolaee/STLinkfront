export default () => {
  const actions = [
    { icon: '⚡', label: 'Boost Performance', color: 'bg-purple-600' },
    { icon: '🔧', label: 'Device Settings', color: 'bg-blue-600' },
    { icon: '📊', label: 'View Reports', color: 'bg-green-600' },
    { icon: '🔄', label: 'Restart Mining', color: 'bg-amber-600' },
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button 
            key={index}
            className={`${action.color} hover:opacity-90 p-4 rounded-lg text-center transition-all`}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};