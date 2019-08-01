// pages/biaodan/biaodan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tushu:{
      name: '',
      number: '',
      price: '',
      yuanjia: '',
      isbn: '',
      tupian: ''
    }
   
  },

  onSubmit:function(e){
    var objData = e.detail.value;
    if (objData.name && objData.number && objData.price && objData.yuanjia && objData.isbn && objData.tupian)  {
      //异步方式储存表单数据
      wx.setStorage({
        key: 'tushu',
        data: objData, 
        success(){
          wx.navigateTo({
            url: '/pages/shenghe/shenghe',
          })
        }
      }) 
    }else{
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
     }
    
  },

  onReset:function(e){

  },

  onLoad() {
    
  },

  upload: function () {
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths: tempFilePaths
        })
      },
    })

    wx.previewImage({
      urls: [this.data.tempFilePaths],
    })
  },

})