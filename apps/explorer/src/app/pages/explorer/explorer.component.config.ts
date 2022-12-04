import { Injectable } from "@angular/core";

@Injectable()
export class ExplorerComponentConfig {
    public pageConfig: any = {
        title: 'Explorer'
    }

    public teaserConfig: any = {
        currentPrice: {
            title: 'Current Price',
            value: '0,488710',
            currencySymbol: '$'
        },
        totalStaking: {
            title: 'Total Staking',
            value: '6.847.239',
            currencySymbol: 'BTC2'
        },
        maxSuppply: {
            title: 'Max Supply',
            value: '17.954.210,60',
            currencySymbol: 'BTC2'
        },
        marketCup: {
            title: 'Market cap',
            value: '8.498.699',
            currencySymbol: '$'
        }
    }
}