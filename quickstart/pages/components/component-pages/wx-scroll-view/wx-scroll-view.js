var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper: function(e) {
    console.log('滚动到顶部或者左边触发');
    console.log(e);
  },
  lower: function(e) {
    console.log('滚动到底部或右边触发');
    console.log(e);
  },
  scroll2: function(e) {
    console.log('滚动时触发');
    console.log(e);
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break;
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})