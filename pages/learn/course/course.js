// pages/learn/course/course.js
const util = require('../../../utils/util') // 引入封装过的加载提示

Component({
  data: {
    active: 0,
    courseId: -1,
    courseName: "",
    notifications: [],
    homework: [],
    files: [],
    discardNotifications: [],
    discardHomeworks: [],

    tabDatas: [{
        "text": "公告"
      },
      {
        "text": "作业"
      },
      {
        "text": "文件"
      },
    ],
  },
  methods: {
    onChange(e) {
      this.setData({
        active: e.detail.index
      });
    },

    notiToTap: function (e) {
      // console.log(e);
      if (e.detail == "right") {
        var tmp = wx.getStorageSync('discardNotifications') || [];
        tmp.push(e.currentTarget.dataset.id);
        wx.setStorageSync('discardNotifications', tmp);
        this.setData({
          discardNotifications: tmp
        });
        // console.log(wx.getStorageSync('discardNotifications'));
      } else if (e.detail == "cell") {
        var notification = e.currentTarget.dataset.noti;
        // console.log(notification);
        wx.navigateTo({
          //实现跳转到test界面的函数，url附带跳转时传送的数据
          url: '/pages/learn/notification/notification?json=' + encodeURIComponent(JSON.stringify(notification)) + "&coursename=" + this.data.courseName,
        })
      }
    },
    notiToArchive: function (e) {
      console.log("notiToArchive");
      var notis = e.currentTarget.dataset.notis;
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/notification/discards/discards?notis=' + encodeURIComponent(JSON.stringify(notis)) + "&type=" + e.currentTarget.dataset.type,
      })
    },

    hwToTap: function (e) {
      // console.log(e);
      if (e.detail == "right") {
        var tmp = wx.getStorageSync('discardHomeworks') || [];
        tmp.push(e.currentTarget.dataset.id);
        wx.setStorageSync('discardHomeworks', tmp);
        this.setData({
          discardHomeworks: tmp
        });
      } else if (e.detail == "cell") {
        var hw = e.currentTarget.dataset.hw;
        // console.log(hw);
        wx.navigateTo({
          //实现跳转到test界面的函数，url附带跳转时传送的数据
          url: '/pages/learn/homework/homework?json=' + encodeURIComponent(JSON.stringify(hw)) + "&coursename=" + this.data.courseName,
        })
      }
    },
    hwToArchive: function (e) {
      console.log("hwToArchive");
      var hws = e.currentTarget.dataset.hws;
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/homework/discards/discards?hws=' + encodeURIComponent(JSON.stringify(hws)) + "&type=" + e.currentTarget.dataset.type,
      })
    },

    previewFile: function(fileLink, fileType_) {
      //console.log(fileLink, fileType_);
      if (!fileLink) {
        return false
      }
      util.showLoading()
      var cookieStr = "";
      const cookies = wx.getStorageSync('cookies') || [];
      for(var cookieJson of cookies)
      {
        //console.log(cookieJson);
        if(cookieJson.domain === "learn.tsinghua.edu.cn")
        {
          if(cookieStr !== "") cookieStr=cookieStr.concat(";");
          cookieStr=cookieStr.concat(cookieJson.key, "=", cookieJson.value);
        }
      }
      //console.log(cookieStr);

      // 单次下载允许的最大文件为 200MB
      wx.downloadFile({
        url: fileLink,
        header: {
          'Cookie': cookieStr
        },
        success: function (res) {
          console.log(res, "wx.downloadFile success res")
          if (res.statusCode != 200 || res.dataLength < 100) {
            util.hideLoadingWithErrorTips()
            return false
          }
          
          var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
          wx.openDocument({
            filePath: Path,
            fileType: fileType_,
            showMenu: true,
            success: function (res) {
              console.log('打开成功');
              util.hideLoading()
            },
            fail: function (err) {
              console.log(err, "wx.openDocument fail err");
              util.hideLoadingWithErrorTips()
            }
          })
        },
        fail: function (err) {
          console.log(err, "wx.downloadFile fail err");
          util.hideLoadingWithErrorTips()
        }
      })
    },
    fileToTap: function (e) {
      // console.log(e);
      var file = e.currentTarget.dataset.file;
      // console.log(hw);
      this.previewFile(file.downloadUrl, file.fileType);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // console.log(options.id, "onLoad");
      const loginInfo = wx.getStorageSync('loginInfo');

      this.setData({
        courseId: options.id,
        courseName: options.name
      });
      // 最初获取数据
      wx.request({
        url: 'http://localhost:3000/learn/courseDetail',
        data: {
          username: "2018013402",
          courseId: this.data.courseId
        },
        method: "POST",
        dataType: 'JSON',
        responseType: 'text',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'authorization': loginInfo.token,
        },
        success: (res) => {
          var jsonRes = JSON.parse(res.data);
          if (jsonRes["msg"] == "ok") {
            // console.log(jsonRes["notifications"]);
            this.setData({
              notifications: jsonRes["notifications"],
              homework: jsonRes["homework"],
              files: jsonRes["files"],
            });
            // this.data.notifications.sort(function(a, b){if(a.hasRead ^ b.hasRead){return (a.hasRead)? -1:1} else {return a.publishTime - b.publishTime}});
            this.data.homework.sort(function (a, b) {
              /*if(a.submitted ^ b.submitted){console.log("diff");return (a.submitted)? -1:1} else {*/
              return b.deadline - a.deadline;
            });
            // this.data.files.sort(function(a, b){return a.uploadTime - b.uploadTime});
          } else {
            console.log(jsonRes);
          }
        }
      });
      wx.setNavigationBarTitle({
        title: options.name
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
      console.log("onUnload");
      wx.setNavigationBarTitle({
        title: "网络学堂"
      });
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
  }
});