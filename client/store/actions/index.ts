import * as CarActionCreators from "./carActions";
import * as UserActionCreators from "./userAction";
import * as ManufacturerActionCreators from "./manufacturerAction";

export default {
  ...CarActionCreators,
  ...UserActionCreators,
  ...ManufacturerActionCreators,
};
