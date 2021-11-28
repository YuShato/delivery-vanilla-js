import Tabs from "./components/tabs.js";
import Delivery from './components/delivery.js';

export default class App {
    init() {
        const tabs = new Tabs(`.js_tabs-block`, `.js_tab`);
        tabs.init();

        const delivery = new Delivery(`10:00`, `19:00`, `00:20`);
        delivery.init();
    }
}