import { Component } from "@angular/core";
import { HeaderComponentConfig } from "./header.component.config";

@Component({
    selector: 'block-explorer-header',
    templateUrl: './header.component.html',
    providers: [HeaderComponentConfig]
})

export class HeaderComponent {
    public constructor(
        public config: HeaderComponentConfig
    ) {}
}