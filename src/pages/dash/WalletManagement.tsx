import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default () => {
  const [wallets, setWallets] = useState<any[]>([]);
  
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Wallet Management</h2>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircleOutlined className="w-5 h-5" />
          Add Wallet
        </button>
      </div>
      
      {/* Add Wallet Form */}
      <div className="mb-4 p-4 bg-gray-700 rounded-lg">
        <h3 className="font-semibold mb-3">Add New Wallet</h3>
        <div className="space-y-3">
          <input 
            type="text" 
            placeholder="Wallet Address" 
            className="w-full p-3 bg-gray-600 rounded-lg border border-gray-500 focus:border-blue-500"
          />
          <select className="w-full p-3 bg-gray-600 rounded-lg border border-gray-500">
            <option>Select Currency</option>
            <option>BTC - Bitcoin</option>
            <option>ETH - Ethereum</option>
            <option>USDT - Tether</option>
          </select>
          <input 
            type="text" 
            placeholder="Wallet Name (Optional)" 
            className="w-full p-3 bg-gray-600 rounded-lg border border-gray-500"
          />
          <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold">
            Connect Wallet
          </button>
        </div>
      </div>
      
      {/* Wallet List */}
      <div className="space-y-3">
        <h3 className="font-semibold">Connected Wallets</h3>
        {wallets.map(wallet => (
          <div key={wallet.id} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
            <div>
              <p className="font-medium">{wallet.name}</p>
              <p className="text-sm text-gray-400 truncate max-w-xs">{wallet.address}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">{wallet.balance}</p>
              <p className="text-sm text-gray-400">{wallet.currency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};