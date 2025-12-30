import React, { useState, useEffect } from 'react';
import './Wallet.css';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  description: string;
  date: string;
}

interface WalletProps {
  userName?: string;
  initialBalance?: number;
  currency?: string;
}

const Wallet: React.FC<WalletProps> = ({
  userName = 'User',
  initialBalance = 1000,
  currency = 'USD'
}) => {
  const [balance, setBalance] = useState<number>(initialBalance);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', type: 'deposit', amount: 500, description: 'Initial deposit', date: '2024-01-15' },
    { id: '2', type: 'withdrawal', amount: 100, description: 'Coffee shop', date: '2024-01-16' },
    { id: '3', type: 'transfer', amount: 200, description: 'Sent to friend', date: '2024-01-17' },
  ]);
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // Calculate total balance from transactions
  useEffect(() => {
    const calculatedBalance = transactions.reduce((total, transaction) => {
      if (transaction.type === 'deposit') {
        return total + transaction.amount;
      } else {
        return total - transaction.amount;
      }
    }, initialBalance);
    setBalance(calculatedBalance);
  }, [transactions, initialBalance]);

  const handleDeposit = () => {
    if (!amount || parseFloat(amount) <= 0) return;

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: 'deposit',
      amount: parseFloat(amount),
      description: description || 'Deposit',
      date: new Date().toISOString().split('T')[0],
    };

    setTransactions([newTransaction, ...transactions]);
    setAmount('');
    setDescription('');
  };

  const handleWithdrawal = () => {
    if (!amount || parseFloat(amount) <= 0 || parseFloat(amount) > balance) return;

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: 'withdrawal',
      amount: parseFloat(amount),
      description: description || 'Withdrawal',
      date: new Date().toISOString().split('T')[0],
    };

    setTransactions([newTransaction, ...transactions]);
    setAmount('');
    setDescription('');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'deposit': return 'text-green-600';
      case 'withdrawal': return 'text-red-600';
      case 'transfer': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <h1>💰 Digital Wallet</h1>
        <p>Welcome, {userName}!</p>
      </div>

      <div className="balance-card">
        <div className="balance-label">Current Balance</div>
        <div className="balance-amount">{formatCurrency(balance)}</div>
        <div className="balance-subtitle">Available funds</div>
      </div>

      <div className="transaction-section">
        <h2>Quick Actions</h2>
        <div className="action-controls">
          <div className="input-group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="amount-input"
              min="0"
              step="0.01"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              className="description-input"
            />
          </div>
          <div className="button-group">
            <button 
              onClick={handleDeposit}
              className="btn-deposit"
              disabled={!amount || parseFloat(amount) <= 0}
            >
              Deposit
            </button>
            <button 
              onClick={handleWithdrawal}
              className="btn-withdraw"
              disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > balance}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="transaction-history">
        <h2>Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="no-transactions">No transactions yet</p>
        ) : (
          <div className="transactions-list">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-info">
                  <div className="transaction-description">
                    {transaction.description}
                  </div>
                  <div className="transaction-date">{transaction.date}</div>
                </div>
                <div className={`transaction-amount ${getTransactionColor(transaction.type)}`}>
                  {transaction.type === 'deposit' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="wallet-footer">
        <div className="stats">
          <div className="stat-item">
            <span className="stat-label">Total Transactions:</span>
            <span className="stat-value">{transactions.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Currency:</span>
            <span className="stat-value">{currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;