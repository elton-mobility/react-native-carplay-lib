"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NowPlayingTemplate = void 0;
const Template_1 = require("./Template");
class NowPlayingTemplate extends Template_1.Template {
    get type() {
        return 'nowplaying';
    }
}
exports.NowPlayingTemplate = NowPlayingTemplate;
