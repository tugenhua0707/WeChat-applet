Page({
  data: {
    hidden: true
  },
  timer: null,
  loadingTap: function() {
    this.setData({
      hidden: false
    });
    var me = this;
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(function(){
      me.setData({
        hidden: true
      })
    }, 3000);
  }
});