import { BillDetails } from './billDetails';

export interface Bill{
    userId: number,
    purchaseDate: Date,
    productList: BillDetails[],
    rewardPoints: number,
    userRewardPoints: number
}