function getVRDeviceType(){
  var deviceType;
  if(isMobile.phone){
    deviceType = 'MOBILE';
  }
  else if(navigator.getVRDevices) {
    deviceType = 'HMD';
  }
  else{
    deviceType = 'NONE';
  }
  return deviceType;
}
