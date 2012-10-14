history.pushState("what do these", "parameters even do", location.pathname.replace("/blog/", "/tumblelog/"))

if (location.pathname == "/dashboard" && location.hash.indexOf("full") == -1) {
  // $("#posts > li.new_post")
  //   .css({ height: 56 })
  //   .find("img")
  //     .css({ marginTop: -8 })
  //     .wrap($("<div>").css({ overflow: "hidden", height: "100%" }))
  //     .end()
  //   .find("map")
  //     .end()
  //   .find("a.new_post_label")
  //     .remove()

  $("#user_tools, #user_channels > li:not(:first-child), #right_column")
    .remove()
    
  $("div.tab_bar").removeAttr("style")
  
  $("#container").css("width", 666) // ahhhhh

  $("#header").css({ width: "100% !important", marginBottom: -5 })

  $("#tabs_outter_container") // lol
    .css({ position: "static", width: "auto" })
    
  // now remove instagram cross-posts!
  // just do this every five seconds instead of trying to find the infinity scroll auto-load event
  // a perfect implementation wouldn't remove reblogs or photos with new captions or photos not taken by the tumblr user
  // but fuck you
  clearInstagrams = function() {
    $("div.caption a[href='http://instagram.com'], a.high_res_link[href^='http://instagr.am']").each(function() {
      var
        $this = $(this),
        $caption = $this.closest("div.caption"),
        $post = $this.closest("li.post")

      if (
        $this.hasClass("high_res_link") ||
        ($caption.length && $caption.html().match("(Taken with <a href=\"http://instagram.com\">Instagram</a>)"))
      ) {
        $post
          .next()
            .removeClass("same_user_as_last")
            .end()
          .remove()
      }
    })
  }
  
  clearInstagrams()
  setInterval(clearInstagrams, 5000)
}