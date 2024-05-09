export namespace ProductActions {
  export class FetchAll {
    static readonly type = '[Product] Fetch All';
  }
  export class FetchSuccess {
    static readonly type = '[Product] Fetch Success';
  }
  export class FetchFail {
    static readonly type = '[Product] Fetch Request Fail';
  }
}
