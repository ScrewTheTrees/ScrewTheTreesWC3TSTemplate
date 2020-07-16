/** @noSelfInFile **/
import {Game} from "./Game";


let gg_trg_Start: trigger;
let gameInstance: Game;

function MapStart() {
    xpcall(() => {
        gameInstance = new Game();
        gameInstance.run();
    }, print);

    DestroyTrigger(gg_trg_Start);
}

function NewMain() {
    gg_trg_Start = CreateTrigger();
    TriggerRegisterTimerEvent(gg_trg_Start, 0.00, false);
    TriggerAddAction(gg_trg_Start, () => MapStart())
}

// @ts-ignore
_G._oldMain = main;
_G.main = () => {
    _G._oldMain();
    NewMain();
}