import { numString } from "mrv-utils";

export default interface DataSet {

    startTime?: string | Date
    workingDays?: string[] | Date[]
    totalRevenue?: TInfo;

    row1: {
        localUptime?: TInfo;
        connectedPeers?: TInfo;

        blockHeight: {
            maxObserved?: TInfo;
            maxUnvalidated?: TInfo;
        }

        lastBestTip?: TInfo;

        consensus: {
            delegatorCount?: TInfo;
            stackingKeyPairs?: TInfo;
        }

        blockProducer: {
            blocksProduced?: TInfo;
            slotsWon?: TInfo
        }



    }


    row2: {
        chart11?: TChartXY;
        chart12?: TChartXY;
        chart13?: TChartXY;
    }


    row3: {
        farmHashRate?: TInfo;
        walletBalance?: TInfo;
        chart21?: TChartXY;
        chart22?: TChartXY;
        miner1Algo: TInfo;
        miner2Algo: TInfo;

        snarkFeePerBlock: TInfo;
        lastSnarkWorkReceived: TInfo;
        transactionFeePerBlock: TInfo;
        lastTransactionReceived: TInfo;


    }

}


type TChartXY = {
    x: any[];
    y: any[]
}

type TInfo = {
    keName: string;
    value: numString;
    unitName?: string
}