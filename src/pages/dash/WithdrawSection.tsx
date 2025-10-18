import { useState } from "react";

export default  () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Withdraw Funds</h2>
      
      <div className="space-y-4">
        {/* Balance Overview */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400">Available Balance</p>
              <p className="text-2xl font-bold">0.2548 BTC</p>
              <p className="text-sm text-gray-400">≈ $15,247.50 USD</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Pending</p>
              <p className="text-lg font-semibold">0.0042 BTC</p>
            </div>
          </div>
        </div>

        {/* Withdraw Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Amount to Withdraw</label>
            <div className="flex gap-2">
              <input 
                type="number"
                placeholder="0.00"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="flex-1 p-3 bg-gray-600 rounded-lg border border-gray-500"
              />
              <select className="w-24 p-3 bg-gray-600 rounded-lg border border-gray-500">
                <option>BTC</option>
                <option>ETH</option>
                <option>USD</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Destination Wallet</label>
            <select 
              value={selectedWallet}
              onChange={(e) => setSelectedWallet(e.target.value)}
              className="w-full p-3 bg-gray-600 rounded-lg border border-gray-500"
            >
              <option>Select Wallet</option>
              <option>Primary BTC Wallet</option>
              <option>Secondary BTC Wallet</option>
              <option>Cold Storage</option>
            </select>
          </div>

          <div className="p-3 bg-amber-500 bg-opacity-20 border border-amber-500 rounded-lg">
            <p className="text-sm text-amber-300">
              ⚠️ Minimum withdrawal: 0.001 BTC | Network fee: 0.0002 BTC
            </p>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            Process Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
};