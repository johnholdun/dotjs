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
      style: "display: inline-block; width: 32px; line-height: 32px; overflow: hidden; text-indent: -999px; background: url('http://i.imgur.com/wucK0.png') no-repeat center center;"
    })
      .appendTo($("#watch-actions"))
  }
})
  
  
// Strip it down

if (location.pathname === "/" && location.hash.indexOf("full") === -1)
  $(function() {
    $("body").append($("<style>").html("\
      body { background: #FFF; overflow: hidden scroll; }\
      #guide, .branded-page-v2-primary-col-header-container, .feed-filter-v2, .branded-page-v2-secondary-col, #footer, .ad-div, .metadata, .feed-author-bubble, .feed-item-time, #masthead-nav, #masthead-user-bar-container\
        { display: none !important; }\
      #masthead { width: 430px; margin: 0 auto; }\
      #masthead-search-bar-container { padding-right: 0; }\
      #content { width: 490px; margin: 0 auto; }\
      .branded-page-v2-primary-col, .branded-page-v2-container.has-top-row { border: none !important; box-shadow: none !important; }\
      .feed-item-main h4 { overflow: visible; max-height: 100%; }\
      .feed-item-header { text-indent: 999em; height: 1em; margin-left: 195px; overflow: hidden; }\
      .feed-item-thumb { margin-top: -24px; }\
      .feed-item-owner { display: block; text-indent: 0; }\
    "))      
  })