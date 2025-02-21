const cucumber = require('cucumber');
const mink = require('cucumber-mink');

const driver = new mink.Mink({
  baseUrl: 'http://127.0.0.1:4000',
  viewport: {
    width: 1366,
    height: 768,
  },
  selectors: {
    "the Table tab": ".data-view .nav-link[href='#tableview']",
    "the Chart tab": ".data-view .nav-link[href='#chartview']",
    "the Map tab": ".data-view .nav-link[href='#mapview']",
    "sortable table": "#tableview table",
    "visual chart": "#chartview canvas",
    "map": "#mapview #map.leaflet-container",
    "the Global metadata tab": ".nav-tabs .nav-link[href='#global']",
    "the National metadata tab": ".nav-tabs .nav-link[href='#national']",
    "the Sources metadata tab": ".nav-tabs .nav-link[href='#sources']",
    "goal indicator": ".indicator-cards.row > div",
    "goal target": ".indicator-cards.target",
    "the high-contrast button": ".nav .contrast-high a",
    "goal icon": ".goal-tiles a img",
    "high-contrast goal icon": ".goal-tiles a img[src*='high-contrast']",
    "the language toggle dropdown": ".nav .language-toggle-button",
    "the first language option": ".nav .language-options li:first-child a",
    "the last language option": ".nav .language-options li:last-child a",
    "goal status": ".goal .frame",
    "the search box": ".navbar #indicator_search",
    "the filter drop-down button": ".variable-selector .accessBtn",
    "the first filter option": ".variable-selector .variable-options label",
    "selected unit of measurement": "#units input[checked='']",
    "chart legend": "#legend li",
    "chart legend item": "#legend li",
    "data table": "#selectionsTable",
    "data table column": "#selectionsTable thead th",
    "the 'Select all' button": "button[data-type='select']",
    "the 'Clear all' button": "button[data-type='clear']",
    "the 'Clear selections' button": "button#clear",
    "success data notice": "div.alert.success",
    "disaggregation sidebar": "#indicator-sidebar:not(.indicator-sidebar-hidden)"
  }
});

// Avoid timeout issues.
cucumber.setDefaultTimeout(60 * 1000);

driver.hook(cucumber);
