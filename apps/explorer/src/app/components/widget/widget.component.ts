import { Component, Input } from "@angular/core";

@Component({
    selector: 'block-explorer-widget',
    templateUrl: './widget.component.html',
})

export class WidgetComponent {
    @Input() public data: any;
}