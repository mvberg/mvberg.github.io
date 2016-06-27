/**
 * Created by m-ehrenberg on 6/27/2016.
 */
import {messenger} from './messenger.js';

export class Main {
    constructor() {
        messenger.hi('hello bro');
    }
}

export const main = new Main();