import { Component, OnInit } from "@angular/core";
import { BlockInterface } from "../../interfaces/block.interface";
import { ExplorerComponentConfig } from "./explorer.component.config";

@Component({
    selector: 'block-explorer-exporer',
    templateUrl: './explorer.component.html',
    providers: [ExplorerComponentConfig]
})

export class ExplorerComponent {
    public title = 'Explorer';
    public constructor(
        public config: ExplorerComponentConfig
        // private readonly blockService: BlockService,
    ) {}

    // public async ngOnInit(): Promise<void> {
    //     // Hier soll die methode ausgeben:
    //     // await this.getBlock()
    // }


    // public async getBlock(): Promise<BlockInterface[]> {
    //     return await this.blockService.getBLock();
    // }
}