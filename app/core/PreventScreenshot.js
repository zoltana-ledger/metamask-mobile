export default {
  forbid: isAndroid ? NativeModules.PreventScreenshot.forbid : () =>{ return true},
  allow: isAndroid ? NativeModules.PreventScreenshot.allow : () =>{ return true}
};
