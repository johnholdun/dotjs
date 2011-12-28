history.pushState("what do these", "parameters even do", location.pathname.replace("/blog/", "/tumblelog/"))

if (location.pathname == "/dashboard" && location.hash.indexOf("full") == -1) {
  $("#posts > li.new_post")
    .css({ height: 56 })
    .find("img")
      .css({ marginTop: -8 })
      .wrap($("<div>").css({ overflow: "hidden", height: "100%" }))
      .end()
    .find("map")
      .end()
    .find("a.new_post_label")
      .remove()
      
  $("#user_tools, #user_channels > li:not(:first-child), #right_column")
    .remove()
    
  $("div.tab_bar").removeAttr("style")
  
  $("#container").css("width", 666) // ahhhhh

  $("#header").css({ width: "100% !important", marginBottom: -5 })

  $("#tabs_outter_container") // lol
    .css({ position: "static", width: "auto" })
}