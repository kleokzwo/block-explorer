import { Component } from "@angular/core";
import { FooterComponentConfig } from "./footer.component.config";

@Component({
    selector: 'block-explorer-footer',
    templateUrl: './footer.component.html',
    providers: [FooterComponentConfig]
})

export class FooterComponent {
    public constructor(
        public config: FooterComponentConfig
    ) {}
}