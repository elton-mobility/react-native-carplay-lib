"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const CarPlay_1 = require("../CarPlay");
const traverse = require('traverse'); // tslint:disable-line no-var-requires
const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource'); // tslint:disable-line no-var-requires
class Template {
    constructor(config) {
        this.config = config;
        if (config.id) {
            this.id = config.id;
        }
        if (!this.id) {
            this.id = `${this.type}-${Date.now()}-${Math.round(Math.random() * Number.MAX_SAFE_INTEGER)}`;
        }
        const eventMap = Object.assign({ barButtonPressed: 'onBarButtonPressed', didAppear: 'onDidAppear', didDisappear: 'onDidDisappear', willAppear: 'onWillAppear', willDisappear: 'onWillDisappear' }, (this.eventMap || {}));
        Object.entries(eventMap).forEach(([eventName, callbackName]) => {
            CarPlay_1.CarPlay.emitter.addListener(eventName, e => {
                if (config[callbackName] && e.templateId === this.id) {
                    config[callbackName](e);
                }
            });
        });
        if (this.type !== 'map') {
            CarPlay_1.CarPlay.bridge.createTemplate(this.id, this.parseConfig(Object.assign({ type: this.type }, config)));
        }
    }
    get type() {
        return 'unset';
    }
    get eventMap() {
        return {};
    }
    parseConfig(config) {
        const result = traverse(config).map(function node(x) {
            if (String(this.key).match(/[Ii]mage$/)) {
                this.update(resolveAssetSource(x));
            }
        });
        return JSON.parse(JSON.stringify(result));
    }
}
exports.Template = Template;
