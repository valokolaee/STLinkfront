import ITransaction from "../../../../interfaces/ITransaction";

export const list: ITransaction[] = [
    { id: 1, amount: 120, createdAt: new Date(), creatorId: 55, fromWalletId: 3, toWalletId: 13, withdrawRequestId: 323, confirmorId: 30, type: 'deposit', desc: 'for thanks giving', },
    { id: 3, amount: 30, createdAt: new Date(), creatorId: 55, fromWalletId: 30, toWalletId: 3, withdrawRequestId: 323, confirmorId: 30, type: 'transfer', desc: 'for thanks giving', },
    { id: 3, amount: 50, createdAt: new Date(), creatorId: 55, fromWalletId: 3, toWalletId: 13, withdrawRequestId: 323, confirmorId: 30, type: 'withdrawal', desc: 'for thanks giving', },
    { id: 4, amount: 130, createdAt: new Date(), creatorId: 55, fromWalletId: 32, toWalletId: 3, withdrawRequestId: 323, confirmorId: 30, type: 'deposit', desc: 'for thanks giving', },
    { id: 5, amount: 400, createdAt: new Date(), creatorId: 55, fromWalletId: 3, toWalletId: 23, withdrawRequestId: 323, confirmorId: 30, type: 'transfer', desc: 'for thanks giving', },
    { id: 6, amount: 3, createdAt: new Date(), creatorId: 55, fromWalletId: 31, toWalletId: 3, withdrawRequestId: 323, confirmorId: 30, type: 'transfer', desc: 'for thanks giving', },
    { id: 7, amount: 42, createdAt: new Date(), creatorId: 55, fromWalletId: 3, toWalletId: 34, withdrawRequestId: 323, confirmorId: 30, type: 'withdrawal', desc: 'for thanks giving', },
    { id: 8, amount: 79, createdAt: new Date(), creatorId: 55, fromWalletId: 40, toWalletId: 3, withdrawRequestId: 323, confirmorId: 30, type: 'deposit', desc: 'for thanks giving', },
    { id: 9, amount: 60, createdAt: new Date(), creatorId: 55, fromWalletId: 3, toWalletId: 63, withdrawRequestId: 323, confirmorId: 30, type: 'transfer', desc: 'for thanks giving', },
    { id: 10, amount: 300, createdAt: new Date(), creatorId: 55, fromWalletId: 1, toWalletId: 3, withdrawRequestId: 323, confirmorId: 30, type: 'withdrawal', desc: 'for thanks giving', },
    { id: 11, amount: 123, createdAt: new Date(), creatorId: 55, fromWalletId: 2, toWalletId: 3, withdrawRequestId: 323, confirmorId: 30, type: 'deposit', desc: 'for thanks giving', },

]