import { Injectable } from "@angular/core";

@Injectable()
export class HeaderComponentConfig {
    public headerConfig: any = {
        title: 'Header',
        path: '/',
        logo: 'https://www.bitc2.org/img/bitcoin2_logo_horizontal.png'
    }
}