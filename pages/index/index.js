//index.js
//获取应用实例对象
const app = getApp()
console.log(app.globalDate.name)
Page({
  data: {
    motto: 'Hello World',
    name: 'CoderPei',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    students:[
      {id:110,name:'kobe',age:'30'},
      {id:111,name:'jame',age:'31'},
      {id:112,name:'curry',age:'32'},
      {id:113,name:'Pei',age:'33'}
    ],
    counter: 0,
  },
  //自定义事件
  addc(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  addj(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  }
})
