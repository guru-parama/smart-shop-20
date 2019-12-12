import { Product } from './product';

export interface Offer{
    id: number;
    offerDate: Date;
    offerPercentage: number;
    offerDetails: string;
    productId: Product;
}