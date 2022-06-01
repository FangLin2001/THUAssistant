// pages/learn/notification/discards.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    notis: [],
    type: [],
    id2name: {},
    discardNotifications: [],
    discardCourses: []
  },

  notiToTap: function (e) {
    // console.log(e);
    if (e.detail == "right") {
      var tmp = wx.getStorageSync('discardNotifications');
      tmp.splice(tmp.indexOf(e.currentTarget.dataset.id), 1);
      wx.setStorageSync('discardNotifications', tmp);
      this.setData({
        discardNotifications: tmp
      });
    } else if (e.detail == "cell") {
      var notification = e.currentTarget.dataset.noti;
      // console.log(notification);
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/notification/notification?json=' + encodeURIComponent(JSON.stringify(notification)) + "&coursename=" + this.data.id2name[notification.courseid],
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
      notis: JSON.parse(decodeURIComponent(options.notis)),
      id2name: wx.getStorageSync('id2name'),
      discardNotifications: wx.getStorageSync('discardNotifications') || [],
      discardCourses: wx.getStorageSync('discardCourses') || [],
    });
    wx.setNavigationBarTitle({
      title: '已归档',
    });
  },
});