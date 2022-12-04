import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BlockInterface } from "../interfaces/block.interface";

@Injectable()
export class BlockService {

    public blocks: BlockInterface[] = [];

    public constructor(
        private readonly http: HttpClient
    ) {}

    public async getBLock(): Promise<BlockInterface[]> {
        const api = './assets/blocks.json';

        const data: any =  this.http.get<BlockInterface[]>(api).subscribe((data) => this.blocks = data)
        console.log('data >>>', data)
        return data;
    }
}