$(function() {
  $("body").removeClass("expanded")
  $("body#p_home .tabbed_heading, #dcollect, li.alert.quiver, #leaderboard_wrapper, #home_ad, .sky_ad, #side_extras, #side_profile_completion, .okad")
    .remove()
  $("#matches_block").css("marginTop", "30px")
  $("#site_news").remove().insertAfter("#visitors_block")
})