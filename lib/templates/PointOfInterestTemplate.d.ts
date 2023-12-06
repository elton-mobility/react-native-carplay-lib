import { Template, TemplateConfig } from './Template';
interface PoiAction {
    id: string;
    title: string;
}
export interface PointOfInterestItem {
    id: string;
    location: {
        latitude: number;
        longitude: number;
    };
    title: string;
    subtitle?: string;
    summary?: string;
    detailTitle?: string;
    detailSubtitle?: string;
    detailSummary?: string;
    image?: any;
    actions: PoiAction[];
}
export interface PointOfInterestTemplateConfig extends TemplateConfig {
    title: string;
    items: PointOfInterestItem[];
    onMapRegionChanged(e: {
        templateId: string;
        latitudeCenter: number;
        longitudeCenter: number;
        latitudeDelta: number;
        longitudeDelta: number;
    }): void;
    onPoiButtonPressed(e: {
        id: string;
        templateId: string;
        poi: PointOfInterestItem;
    }): void;
    onDidSelectPointOfInterest(e: PointOfInterestItem): void;
}
export declare class PointOfInterestTemplate extends Template<PointOfInterestTemplateConfig> {
    config: PointOfInterestTemplateConfig;
    constructor(config: PointOfInterestTemplateConfig);
    get type(): string;
    get eventMap(): {
        mapRegionChanged: string;
        poiButtonPressed: string;
        didSelectPointOfInterest: string;
    };
}
export {};
