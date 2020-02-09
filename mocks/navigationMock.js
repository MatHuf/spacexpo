export default class NavigationMock {
  constructor(params) {
    this.query = params.query;
    this.resultMap = params.resultMap;
    this.hasSections = params.hasSections;
    this.listKey = params.listKey;
    this.renderItem = params.renderItem;
    this.renderSectionHeader = params.renderSectionHeader;
    this.itemKey = params.itemKey;
  }
  getParam(param) {
    console.log(this[param]);
    switch (param) {
      case "query":
        return this.query;
      case "resultMap":
        return this.resultMap;
        break;
      case "hasSections":
        return this.hasSections;
        break;
      case "listKey":
        return this.listKey;
        break;
      case "renderItem":
        return this.renderItem;
        break;
      case "renderSectionHeader":
        return this.renderSectionHeader;
        break;
      case "itemKey":
        return this.itemKey;
        break;
    }
  }
}
