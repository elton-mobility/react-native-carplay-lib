"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTemplate = void 0;
const CarPlay_1 = require("../CarPlay");
const Template_1 = require("./Template");
const react_native_1 = require("react-native");
class SearchTemplate extends Template_1.Template {
    constructor(config) {
        // parse out any images in the results
        super(config);
        this.config = config;
        CarPlay_1.CarPlay.emitter.addListener('updatedSearchText', e => {
            if (config.onSearch && e.templateId === this.id) {
                const x = config.onSearch(e.searchText);
                Promise.resolve(x).then((result = []) => {
                    const parsedResults = result.map(item => (Object.assign(Object.assign({}, item), { image: item.image ? react_native_1.Image.resolveAssetSource(item.image) : undefined })));
                    CarPlay_1.CarPlay.bridge.reactToUpdatedSearchText(parsedResults);
                });
            }
        });
        CarPlay_1.CarPlay.emitter.addListener('selectedResult', e => {
            if (config.onItemSelect && e.templateId === this.id) {
                const x = config.onItemSelect(e);
                Promise.resolve(x).then(() => CarPlay_1.CarPlay.bridge.reactToSelectedResult(true));
            }
        });
    }
    get type() {
        return 'search';
    }
    get eventMap() {
        return {
            searchButtonPressed: 'onSearchButtonPressed',
        };
    }
}
exports.SearchTemplate = SearchTemplate;
