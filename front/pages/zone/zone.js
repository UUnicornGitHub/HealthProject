// pages/zone/zone.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            nbTitle: '个人信息',
            nbFrontColor: '#ffffff',
            nbBackgroundColor: '#00dd77',
      })
    },
    toFood:function(opotions){
        wx.navigateTo({
          url: '../food_menu/food_menu',
        })
    },
    toList:function(opotions){
        wx.navigateTo({
          url: '../list/list',
        })
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