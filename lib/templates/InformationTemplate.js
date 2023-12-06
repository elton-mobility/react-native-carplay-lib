"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationTemplate = void 0;
const Template_1 = require("./Template");
class InformationTemplate extends Template_1.Template {
    get type() {
        return 'information';
    }
    get eventMap() {
        return {
            actionButtonPressed: 'onActionButtonPressed',
        };
    }
}
exports.InformationTemplate = InformationTemplate;
