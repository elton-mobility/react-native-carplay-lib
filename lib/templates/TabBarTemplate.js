"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBarTemplate = void 0;
const CarPlay_1 = require("../CarPlay");
const Template_1 = require("./Template");
/**/
class TabBarTemplate extends Template_1.Template {
    constructor(config) {
        super(config);
        this.config = config;
        this.updateTemplates = (config) => {
            return CarPlay_1.CarPlay.bridge.updateTabBarTemplates(this.id, this.parseConfig(config));
        };
        CarPlay_1.CarPlay.emitter.addListener('didSelectTemplate', e => {
            if (config.onTemplateSelect && e.templateId === this.id) {
                config.onTemplateSelect(config.templates.find(tpl => tpl.id === e.selectedTemplateId), e);
            }
        });
    }
    get type() {
        return 'tabbar';
    }
}
exports.TabBarTemplate = TabBarTemplate;
