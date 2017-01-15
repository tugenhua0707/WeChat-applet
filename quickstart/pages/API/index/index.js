Page({
  data: {
    menuList: [
    {
      name: '基本功能',
      opened: false,
      APIList: [{
        zhName: '微信登录',
        enName: 'login',
        url: '../login/login'
      }, {
        zhName: '获取用户信息',
        enName: 'getUserInfo',
        url: '../get-user-info/get-user-info'
      }, {
        zhName: '发起支付',
        enName: 'RequestPayment',
        url: '../request-payment/request-payment'
      }]
    }, 
    {
      name: '界面跳转、监听和加载',
      opened: false,
      APIList: [{
        zhName: '设置界面标题',
        enName: 'setNavigationBarTitle',
        url: '../set-navigation-bar-title/set-navigation-bar-title'
      },{
        zhName: '页面跳转',
        enName: 'navigateTo, navigateBack, redirectTo',
        url: '../navigate/navigate'
      }, {
        zhName: '下拉刷新',
        enName: 'pullDownRefresh',
        url: '../pull-down-refresh/pull-down-refresh'
      }, {
        zhName: '创建动画',
        enName: 'createAnimation',
        url: '../animation/animation'
      },{
        zhName: '交互反馈--模态框',
        enName: 'show-hide-Toast/Modal/showActionSheet',
        url: '../toast-modal/toast-modal'
      },{
        zhName: '分享按钮',
        enName: 'onShareAppMessage',
        url: '../share-message/share-message'
      }]
    }, 
    {
      name: '设备相关',
      opened: false,
      APIList: [{
        zhName: '获取手机网络状态',
        enName: 'getNetworkType',
        url: '../get-network-type/get-network-type'
      }, {
        zhName: '获取手机系统信息',
        enName: 'getSystemInfo',
        url: '../get-system-info/get-system-info'
      }]
    }, 
    {
      name: '网络相关',
      opened: false,
      APIList: [{
        zhName: '发起一个请求',
        enName: 'request',
        url: '../request/request'
      }, {
        zhName: 'Web Socket',
        enName: 'Web Socket',
        url: '../web-socket/web-socket'
      }, {
        zhName: '上传文件和下载文件',
        enName: 'Upload-load File',
        url: '../upload-load-file/upload-load-file'
      }]
    }, 
    {
      name: '多媒体',
      opened: false,
      APIList: [{
        zhName: '图片',
        enName: 'chooseImage/previewImage',
        url: '../choose-image/choose-image'
      }, {
        zhName: '录音',
        enName: 'start/stopRecord, play/pause/stopVoice',
        url: '../voice/voice'
      },{
        zhName: '背景音频',
        enName: 'play/pause/stopAudio',
        url: '../background-audio/background-audio'
      }, {
        zhName: '文件',
        enName: 'saveFile',
        url: '../save-file/save-file'
      }]
    }, 
    {
      name: '数据',
      opened: false,
      url: '../storage/storage'
    }, 
    {
      name: '地理位置',
      opened: false,
      APIList: [{
        zhName: '获取当前位置',
        enName: 'getLocation',
        url: '../get-location/get-location'
      }, {
        zhName: '使用原生地图查看位置',
        enName: 'openLocation',
        url: '../open-location/open-location'
      }]
    }]
  },
  tapMenuItem: function (e) {
    var menuItem = this.data.menuList[parseInt(e.currentTarget.id)] 
    if (menuItem.url) {
      wx.navigateTo({ url: menuItem.url })
    } else {
      var changeData = {}
      var opened = menuItem.opened

      changeData['menuList[' + e.currentTarget.id + '].opened'] = !opened
      this.setData(changeData)
    }
  }
})
