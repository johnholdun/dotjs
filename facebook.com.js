if (location.hash === "#tickticktick")
  $(function() {
    $("div.ticker_stream")
      .remove()
      .appendTo($("body").html(""))
  })