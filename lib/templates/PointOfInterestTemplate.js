"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointOfInterestTemplate = void 0;
const Template_1 = require("./Template");
class PointOfInterestTemplate extends Template_1.Template {
    constructor(config) {
        super(config);
        this.config = config;
        this.config = config;
    }
    // public updateTemplates = (config: PointOfInterestTemplateConfig) => {
    //   return CarPlay.bridge.updatePoiTemplates(this.id, this.parseConfig(config));
    // };
    get type() {
        return 'poi';
    }
    get eventMap() {
        return {
            mapRegionChanged: 'onMapRegionChanged',
            poiButtonPressed: 'onPoiButtonPressed',
            didSelectPointOfInterest: 'onDidSelectPointOfInterest'
        };
    }
}
exports.PointOfInterestTemplate = PointOfInterestTemplate;
