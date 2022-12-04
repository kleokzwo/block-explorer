import { CoinbaseInterface } from "./coinbase.interface";
import { VoutInterface } from "./vout.interface";

export interface TransactionInterface {
    txid: string;
    hash: string;
    version: number;
    size: number;
    vsize: number;
    weight: number;
    locktime: number;
    vin: CoinbaseInterface[];
    vout: VoutInterface[];
    hex: string;

}