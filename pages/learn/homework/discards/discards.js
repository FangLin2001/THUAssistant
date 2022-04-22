// pages/learn/notification/discards.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hws: [],
    type: [],
    id2name: {},
    discardHomeworks: [],
    discardCourses: []
  },

  hwToTap: function (e) {
    // console.log(e);
    if (e.detail == "right") {
      var tmp = wx.getStorageSync('discardHomeworks');
      tmp.splice(tmp.indexOf(e.currentTarget.dataset.id), 1);
      wx.setStorageSync('discardHomeworks', tmp);
      this.setData({
        discardHomeworks: tmp
      });
    } else if (e.detail == "cell") {
      var hw = e.currentTarget.dataset.hw;
      wx.navigateTo({
        url: '/pages/learn/homework/homework?json=' + encodeURIComponent(JSON.stringify(hw)),
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    this.setData({
      type: options.type,
      hws: JSON.parse(decodeURIComponent(options.hws)),
      id2name: wx.getStorageSync('id2name'),
      discardHomeworks: wx.getStorageSync('discardHomeworks') || [],
      discardCourses: wx.getStorageSync('discardCourses') || [],
    });
  },
});