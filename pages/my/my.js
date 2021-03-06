//获取应用实例
var app = getApp()
Page( {
  data: {
    userInfo: {},
    userListInfo: [ {
      icon: '../../images/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      url:'../orders/orders'
    },{
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '收货地址管理',
        url:'../addr/addr'
    }, {
        icon: '../../images/cart.png',
        text: '我的购物车',
        url: '../cart/cart'
    }]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})
