import { ScriptPublicKeyInterface } from "./script-publickey.interface";


export interface VoutInterface {
    value: number;
    n: number;
    scriptPubKey: ScriptPublicKeyInterface;
}