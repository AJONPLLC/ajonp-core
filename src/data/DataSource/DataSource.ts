import ObservableObject from '../ObservableObject/ObservableObject';

export default class DataSource {
  observableMap: Map<string, ObservableObject> = new Map();
  constructor(config: DataSourceConfiguration) {
    /* Wrap the objects */
    this.makeObservableArray(config.data);
  }
  private makeObservableArray(data: {}[] | string) {
    let array;
    if (typeof data === 'string') {
      array = JSON.parse(data);
    }

    array = data;

    array.forEach(o => {
      const oo = new ObservableObject(o);
      this.observableMap.set(oo.uid, oo);
    });
  }
  public getObservableObjectByUid(key: string) {
    return this.observableMap.get(key);
  }
  public getData() {
    return this.observableMap;
  }
}

export interface DataSourceConfiguration {
  data?: {}[] | string;
  transport?: DataSourceTransport;
}

export interface DataSourceTransport {
  read?: {
    url: string;
    dataType: string;
  };
}
