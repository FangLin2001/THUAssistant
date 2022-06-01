// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    username: ""
  },

  onChange: function (event) {
    var index = event.currentTarget.dataset.id;
    var app = getApp();
    app.globalData.modules[index].status = !app.globalData.modules[index].status;
    this.setData({
      modules: app.globalData.modules
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('loginInfo').userInfo || {},
      username: wx.getStorageSync('loginInfo').username || "",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({            
      active: 1
    });
    var app = getApp();
    this.setData({
      modules: app.globalData.modules
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})