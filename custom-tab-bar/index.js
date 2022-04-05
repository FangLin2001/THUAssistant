// index.js文件
Component({
  data: {
    active: 0,
    username: "",
    password: "",
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

    beforeClose(action) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (action === 'confirm') {
            // 登录
            wx.login({
              success: res => {
                if (res.code) {
                  const pages = getCurrentPages();
                  let page = pages[pages.length - 1];
                  wx.request({
                    url: 'https://localhost:3000/onLogin', //测试api
                    data: {
                      encryptedData: res.encryptedData,
                      iv: res.iv,
                      code: res.code, //用户登录凭证，有效期5分钟
                      username: page.data.username,
                      password: page.data.password
                    },
                    method: "POST",
                    dataType: 'JSON',
                    responseType: 'text',
                    header: {
                      'content-type': 'application/x-www-form-urlencoded', //请求头
                    },
                    success: function (result) {
                      //json转化
                      const res = JSON.parse(result);
                      //解构赋值
                      const {
                        msg,
                        token
                      } = res.data;

                      if (msg != "ok") {
                        wx.showToast({
                          title: '登录失败',
                          icon: 'none'
                        });
                        console.log(msg);
                        resolve(false);
                        return;
                      }
                      // 将用户授权信息&token存储到本地
                      wx.setStorageSync('loginInfo', {
                        username: page.data.username,
                        token: token
                      });
                      page.setData({
                        hasLoginInfo: true
                      });
                      wx.showToast({
                        title: '登录成功',
                        icon: 'none'
                      });
                      resolve(true);
                    },
                    fail: function (result) {
                      wx.showToast({
                        title: '登录失败',
                        icon: 'none'
                      });
                      console.log(result);
                      resolve(false);
                    },
                  });
                } else {
                  console.log('登录失败' + res.errMsg);
                  resolve(false);
                }
              },
            });
          } else {
            // 拦截取消操作
            resolve(false);
          }
        }, 1000);
      });
    },
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("onLoad");
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