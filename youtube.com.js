// Copy Link

$(function(){
  var
    videoIdParts = location.href.match(/\?v=(.+?)(&|$)/),
    videoId,
    niceUrl = "http://youtu.be",
    videoTitle

  if (videoIdParts && videoIdParts.length) {
    niceUrl += "/" + videoIdParts[1] + "#"
    niceUrl += $('a.author:eq(0)').text().trim()
    
    videoTitle = document.title.replace(/- youtube$/i, "").trim()
    niceUrl += "/" + videoTitle.replace(/[^A-Z0-9 ]/gi,'').replace(/ +/g,'-')

    $("<a>", {
      text: videoTitle,
      title: "Descriptive URL",
      href: niceUrl,
      style: "display: block; float: right; width: 24px; height: 24px; margin-top: -30px; overflow: hidden; text-indent: -999px; background: url('http://i.imgur.com/wucK0.png') no-repeat center center;"
    })
      .insertBefore($("#watch-description"))
  }
})
  
  
// Strip it down

if (location.pathname === "/" && location.hash.indexOf("full") === -1)
  $(function() {
    $("body").css({
      background: "#FFF",
      overflowX: "hidden",
      overflowY: "scroll"    
    })
    
    $(".ad-div, .guide-container, .guide-background, #feed-background, #video-sidebar, #footer, #logo-container ~ *, .feed-header")
      .remove()
      
    $("#masthead")
      .css("text-align", "center")

    $("#logo-container")
      .css({ display: "inline-block", float: "none" })
      
    $("#feed")
      .css({
        "margin": "0 auto"
      })
      
  })