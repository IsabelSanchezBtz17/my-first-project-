import { PlayerDetail } from "./player-detail.models";

export interface Player{
    volumen: number,
    second: number,
    name: string,
    detail:PlayerDetail
}