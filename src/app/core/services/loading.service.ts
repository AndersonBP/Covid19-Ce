import { BlockUI, NgBlockUI } from "ng-block-ui";

export class LoadingService {
  private _show: ILoadingService;
  // @BlockUI() blockUI: NgBlockUI;

  init(el: ILoadingService) {
    this._show = el;
  }

  show() {
    // this.blockUI.start();
    this._show.show();
  }

  close() {
    // this.blockUI.stop();
    this._show.close();
  }
}

export interface ILoadingService {
  show(): void;
  close(): void;
}
