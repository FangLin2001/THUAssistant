// pages/info/discards/discards.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classMap: {
      "A+": "Apclass",
      "A": "Aclass",
      "A-": "Amclass",
      "B+": "Bpclass",
      "B": "Bclass",
      "B-": "Bmclass",
      "C+": "Cpclass",
      "C": "Cclass",
      "C-": "Cmclass",
      "D+": "Dpclass",
      "D": "Dclass",
      "D-": "Dmclass",
      "P": "Pclass",
      "F": "Fclass",
      "W": "Wclass",
    },
    
    reportClass: {},
    discardReport: []
  },

  reportToTap: function (e) {
    // console.log(e);
    if (e.detail == "right") {
      var tmp = wx.getStorageSync('discardReport') || [];
      tmp.splice(tmp.indexOf(e.currentTarget.dataset.key), 1);
      wx.setStorageSync('discardReport', tmp);
      this.setData({
        discardReport: tmp
      });
      // console.log(wx.getStorageSync('discardNotifications'));
    } else if (e.detail == "cell") {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("onLoad");
    this.setData({
      reportClass: JSON.parse(decodeURIComponent(options.reportClass)),
      discardReport: wx.getStorageSync('discardReport') || [],
    });
    wx.setNavigationBarTitle({
      title: '已隐藏',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})