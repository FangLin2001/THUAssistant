// pages/learn/announcement/announcement.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    noti: {},
  },

  downloadImage: async function (capture) {
    return new Promise(function (resolve, reject) {
      if (!capture) {
        reject();
      }

      var cookieStr = "";
      const cookies = wx.getStorageSync('cookies') || [];
      for (var cookieJson of cookies) {
        //console.log(cookieJson);
        if (cookieJson.domain === "learn.tsinghua.edu.cn") {
          if (cookieStr !== "") cookieStr = cookieStr.concat(";");
          cookieStr = cookieStr.concat(cookieJson.key, "=", cookieJson.value);
        }
      }
      //console.log(cookieStr);

      // 单次下载允许的最大文件为 200MB
      wx.downloadFile({
        url: capture,
        header: {
          'Cookie': cookieStr
        },
        success: function (res) {
          console.log(res, "wx.downloadFile success res")
          if (res.statusCode != 200 || res.dataLength < 100) {
            reject();
          }
          resolve(res.tempFilePath); //返回的文件临时地址，用于后面打开本地预览所用
        },
        fail: function (err) {
          console.log(err, "wx.downloadFile fail err");
          reject();
        }
      });
    });
  },
  replaceImage: async function (url) {
    var noti_ = this.data.noti;
    noti_.content = await noti_.content.replace(RegExp("<img [^>]*src=['\"]([^'\"]+)[^>]*>", 'gi'), function (match, capture) {
      return match.replace(capture, url);
    });
    this.setData({
      noti: noti_
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    // console.log(options.json, "onLoad");
    wx.setNavigationBarTitle({
      title: options.coursename,
    });

    const that = this;
    var noti_ = JSON.parse(decodeURIComponent(options.json));
    this.setData({
      noti: noti_
    });
    noti_.content.replace(RegExp("<img [^>]*src=['\"]([^'\"]+)[^>]*>", 'gi'), async function (match, capture) {
      var promise = that.downloadImage(capture);
      promise.then(function (url) {
        // success
        console.log(url);
        that.replaceImage(url);
      }, function () {
        // failure
        util.showErrorTips("下载图片失败");
      });
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