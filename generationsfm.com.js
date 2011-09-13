$(function() {
  var $player = $("embed[src$='stream.swf']")
  if (location.href.indexOf("/radio/") !== -1) {
    $player
      .remove()
      .prependTo($("body"))
      .siblings()
        .remove()
    
    $player.wrap(
      $("<div>").css({
        margin: "60px auto",
        width: "140px",
        padding: "10px",
        background: "#FFF",
        borderRadius: "10px"
      })
    )    
  }
})
