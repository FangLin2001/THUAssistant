// index.js文件
Component({
  data: {
    active: 0,
    username: "2018013402",
    password: "20010120FangLin",
    hasLoginInfo: false,
    hide: true,
    list: [{
        "url": "/pages/entrance/entrance",
        "icon": "wap-home-o",
        "text": "导航"
      },
      {
        "url": "/pages/setting/setting",
        "icon": "user-circle-o",
        "text": "设置"
      }
    ],

    // beforeClose(action) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       if (action === 'confirm') {
    //         if (this.data.hasLoginInfo)
    //           resolve(true);
    //         else
    //           resolve(false);
    //       } else {
    //         // 拦截取消操作
    //         resolve(false);
    //       }
    //     }, 10);
    //   });
    // },
  },
  methods: {
    onChange(e) {
      // console.log(e);
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({
        active: e.detail
      });
    },

    clickEye(e) {
      if (this.data.hide) {
        this.setData({
          hide: false
        });
      } else {
        this.setData({
          hide: true
        });
      }
    },

    getUserInfo: function (e) {
      //点击取消按钮
      if (e.detail.userInfo == null) {
        console.log("授权失败");
        wx.showToast({
          title: '拒绝授权',
          icon: 'none'
        });
      } else { //点击允许按钮
        // console.log(e.detail.userInfo);
        // 登录
        wx.login({
          success: res => {
            if (res.code) {
              const that = this;
              wx.request({
                url: 'http://localhost:3000/onLogin', //测试api
                data: {
                  userInfo: e.detail.userInfo,
                  encryptedData: e.detail.encryptedData,
                  iv: e.detail.iv,
                  code: res.code, //用户登录凭证，有效期5分钟
                  username: this.data.username,
                  password: this.data.password
                },
                method: "POST",
                dataType: 'JSON',
                responseType: 'text',
                header: {
                  'content-type': 'application/x-www-form-urlencoded', //请求头
                },
                success: function (result) {
                  //json转化
                  const jsonRes = JSON.parse(result.data);
                  //解构赋值
                  const {
                    msg,
                    token
                  } = jsonRes;

                  if (msg != "ok") {
                    wx.showToast({
                      title: '登录失败',
                      icon: 'none'
                    });
                    console.log(msg);
                    return;
                  }
                  // 将用户授权信息&token存储到本地
                  wx.setStorageSync('loginInfo', {
                    username: that.data.username,
                    token: token,
                    userInfo: e.detail.userInfo
                  });
                  that.setData({
                    hasLoginInfo: true
                  });
                  wx.showToast({
                    title: '登录成功',
                    icon: 'none'
                  });
                },
                fail: function (result) {
                  wx.showToast({
                    title: '登录失败',
                    icon: 'none'
                  });
                  console.log(result);
                  //resolve(false);
                },
              });
            } else {
              console.log('登录失败' + res.errMsg);
              //resolve(false);
            }
          },
        });
      }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("onLoad");
      const that = this;
      that.setData({
        beforeClose: (action) => new Promise((resolve) => {
          console.log("beforeClose", that.data.hasLoginInfo);
          // setTimeout(() => {
            if (action === 'confirm') {
              if (that.data.hasLoginInfo)
                resolve(true);
              else
                resolve(false);
            } else {
              // 拦截取消操作
              resolve(false);
            }
          // }, 1000);
        }),
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log("onReady");
      // 获取存储的用户授权信息
      const loginInfo = wx.getStorageSync('loginInfo') || {};
      // 判断是否存在已经授权的用户信息
      if (Object.keys(loginInfo).length == 0) {
        this.setData({
          hasUserInfo: false,
          active: 0
        })
      } else {
        this.setData({
          username: loginInfo.username,
          hasUserInfo: true,
          active: 0
        })
      }
      wx.switchTab({
        url: this.data.list[this.data.active].url
      });
    },
  }
});