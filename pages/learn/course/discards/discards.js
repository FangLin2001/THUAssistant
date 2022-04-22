// pages/learn/notification/discards.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [],
    discardCourses: []
  },

  courseToTap: function (e) {
    // console.log(e);
    if (e.detail == "right") {
      var tmp = wx.getStorageSync('discardCourses');
      tmp.splice(tmp.indexOf(e.currentTarget.dataset.id), 1);
      wx.setStorageSync('discardCourses', tmp);
      this.setData({
        discardCourses: tmp
      });
    } else if (e.detail == "cell") {
      var id = e.currentTarget.dataset.id;
      var name = e.currentTarget.dataset.name;
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/course/course?id=' + id + '&name=' + name,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    this.setData({
      courses: JSON.parse(decodeURIComponent(options.courses)),
      discardCourses: wx.getStorageSync('discardCourses') || [],
    });
  },
});