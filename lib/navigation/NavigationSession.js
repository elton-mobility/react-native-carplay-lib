"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationSession = void 0;
const CarPlay_1 = require("../CarPlay");
const react_native_1 = require("react-native");
class NavigationSession {
    constructor(id, trip, mapTemplate) {
        this.id = id;
        this.trip = trip;
        this.mapTemplate = mapTemplate;
    }
    updateManeuvers(maneuvers) {
        this.maneuvers = maneuvers;
        CarPlay_1.CarPlay.bridge.updateManeuversNavigationSession(this.id, maneuvers.map(maneuver => {
            if (maneuver.symbolImage) {
                maneuver.symbolImage = react_native_1.Image.resolveAssetSource(maneuver.symbolImage);
            }
            if (maneuver.junctionImage) {
                maneuver.junctionImage = react_native_1.Image.resolveAssetSource(maneuver.junctionImage);
            }
            if (maneuver.tintSymbolImage && typeof maneuver.tintSymbolImage === 'string') {
                maneuver.tintSymbolImage = react_native_1.processColor(maneuver.tintSymbolImage);
            }
            return maneuver;
        }));
    }
    updateTravelEstimates(maneuverIndex, travelEstimates) {
        if (!travelEstimates.distanceUnits) {
            travelEstimates.distanceUnits = 'kilometers';
        }
        CarPlay_1.CarPlay.bridge.updateTravelEstimatesNavigationSession(this.id, maneuverIndex, travelEstimates);
    }
    cancel() {
        CarPlay_1.CarPlay.bridge.cancelNavigationSession(this.id);
    }
    finish() {
        CarPlay_1.CarPlay.bridge.finishNavigationSession(this.id);
    }
    pause(reason, description) {
        CarPlay_1.CarPlay.bridge.pauseNavigationSession(this.id, reason, description);
    }
}
exports.NavigationSession = NavigationSession;
