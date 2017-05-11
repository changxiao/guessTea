export default {
  share: (function () {
    var wxShareData = {}

    function loadJsFile (filename, callback) {
      var fileref = document.createElement('script')
      fileref.setAttribute('type', 'text/javascript')
      fileref.setAttribute('src', filename)
      if (typeof fileref !== 'undefined') {
        fileref.onload = function () {
          callback && callback()
        }
        document.getElementsByTagName('head')[0].appendChild(fileref)
      }
    }

    function loadShareConfig () {
      var apiUrl = 'http://www.xhwhouse.com/api/agent/?return=jsonp&r=' + Math.random() + '&callback=jsonp1&key=f74690c65e061249&module=jwx_config&url=' + encodeURIComponent(window.location.href)
      loadJsFile(apiUrl)
    }

    function initWx (wx, result) {
      wx.config({
        debug: wxShareData.debug ? wxShareData.debug : false,
        appId: result.appId,
        timestamp: result.timestamp,
        nonceStr: result.nonceStr,
        signature: result.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
      })
      wx.ready(function () {
        wx.onMenuShareAppMessage({
          title: wxShareData.title,
          desc: wxShareData.desc,
          link: wxShareData.link,
          imgUrl: wxShareData.imgUrl,
          success: wxShareData.success ? wxShareData.success : function () {},
          cancel: wxShareData.cancel ? wxShareData.cancel : function () {}
        })
        wx.onMenuShareTimeline({
          title: wxShareData.title,
          link: wxShareData.link,
          imgUrl: wxShareData.imgUrl,
          success: wxShareData.success ? wxShareData.success : function () {},
          cancel: wxShareData.cancel ? wxShareData.cancel : function () {}
        })
        wx.onMenuShareQQ({
          title: wxShareData.title,
          link: wxShareData.link,
          imgUrl: wxShareData.imgUrl,
          success: wxShareData.success ? wxShareData.success : function () {},
          cancel: wxShareData.cancel ? wxShareData.cancel : function () {}
        })
        wx.onMenuShareWeibo({
          title: wxShareData.title,
          link: wxShareData.link,
          imgUrl: wxShareData.imgUrl,
          success: wxShareData.success ? wxShareData.success : function () {},
          cancel: wxShareData.cancel ? wxShareData.cancel : function () {}
        })
        wx.onMenuShareQZone({
          title: wxShareData.title,
          link: wxShareData.link,
          imgUrl: wxShareData.imgUrl,
          success: wxShareData.success ? wxShareData.success : function () {},
          cancel: wxShareData.cancel ? wxShareData.cancel : function () {}
        })
      })
    }
    if (!window.jsonp1) {
      window.jsonp1 = function (result) {
        result = result.data
        if (window.wx) {
          initWx(window.wx, result)
        } else {
          loadJsFile('http://res.wx.qq.com/open/js/jweixin-1.0.0.js')
        }
      }
    }

    function init (data) {
      wxShareData = data
      loadShareConfig()
    }
    return {
      init: init
    }
  })()
}
