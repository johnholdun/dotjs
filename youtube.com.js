$(function(){
  var
    videoIdParts = document.location.href.match(/\?v=(.+?)(&|$)/),
    videoId,
    niceUrlParts = ['http://youtu.be']

  if (videoIdParts.length) {
    niceUrlParts.push(videoIdParts[1])
    niceUrlParts.push($('a.author').text())
    niceUrlParts.push(document.title.replace(/[^A-Z0-9 \.]/gi,'').replace(/ +/g,'-').replace(/-youtube$/i, ""))

    $("<a>", {
      text: "Descriptive URL",
      title: "Descriptive URL",
      href: niceUrlParts.join("/"),
      style: "display: block; float: right; width: 24px; height: 24px; margin-top: -30px; overflow: hidden; text-indent: -999px; background: url('http://i.imgur.com/wucK0.png') no-repeat center center;"
    })
      .insertBefore($("#watch-description"))
  }
})
  