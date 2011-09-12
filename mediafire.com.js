$(function() {
  
  $("*[id^=remove_ads], .more_dloptions, .footer, .download_options_bar, #header_nav, #logged_in_info").remove()
  $(".dl_options_wrapper")
    .css({ width: "500px", margin: "0 auto" })
    .siblings().remove()
    
  $("#v4logo").css({
    float: "none",
    width: "200px",
    margin: "0 auto"
  })
  
  setTimeout(function() {
    $(".dl_startlink input[type=checkbox]").removeAttr("checked")    
  }, 1500)
    
  try { QU() } catch(e) { }
  
})