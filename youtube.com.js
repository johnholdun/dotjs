// Copy Link

$(function(){
  var
    videoIdParts = location.href.match(/\?v=(.+?)(&|$)/),
    videoId,
    niceUrlParts = ['http://youtu.be']

  if (videoIdParts && videoIdParts.length) {
    niceUrlParts.push(videoIdParts[1])
    niceUrlParts.push($('a.author:eq(0)').text())
    niceUrlParts.push(document.title.replace(/[^A-Z0-9 ]/gi,'').replace(/ +/g,'-').replace(/-youtube$/i, ""))

    $("<a>", {
      text: "Descriptive URL",
      title: "Descriptive URL",
      href: niceUrlParts.join("/"),
      style: "display: block; float: right; width: 24px; height: 24px; margin-top: -30px; overflow: hidden; text-indent: -999px; background: url('http://i.imgur.com/wucK0.png') no-repeat center center;"
    })
      .insertBefore($("#watch-description"))
  }
})
  
  
// Strip it down

if (location.hash.indexOf("full") === -1)
  $(function() {
    $("body").css({
      overflowX: "hidden",
      overflowY: "scroll"    
    })

    $("#masthead, #baseDiv").css({
      width: "640px !important"
    })

    $("#masthead-utility, #user-navbar, .ad-div, #homepage-side-content, .top-videos-module, #footer-container")
      .remove()  
  })