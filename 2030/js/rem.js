function remSize() {
  //  获取屏幕的宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth

  //  获取HTML字体大小  deviceWidth / 3.75(= (手机横向设备独立像素值 * 100 )  / 设计稿宽度（这里默认是3.75）)， 使1rem等于设置稿100px
  document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px'
  document.querySelector('body').style.fontSize = 16 + 'px'
}
remSize()
// 当屏幕宽度发生变化时调用  window.onresize = function () {remSize()}
window.onresize = remSize
