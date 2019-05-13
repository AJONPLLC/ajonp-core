import { BehaviorSubject } from 'rxjs';

import Guid from '../../utils/Guid';

export default class ObservableObject {
  public uid: string;
  private object$: BehaviorSubject<any>;

  constructor(object: object) {
    this.uid = Guid.newGuid();
    this.object$ = new BehaviorSubject(object);
  }
  set(name: string, value: string | number | object) {
    const obj = this.object$.value;
    obj[name] = value;
    this.object$.next(obj);
  }
  get(name: string): any {
    return this.object$.value[name];
  }
  toJSON() {
    return JSON.stringify(this.object$.value);
  }
  getBehaviorSubject() {
    return this.object$;
  }
}
