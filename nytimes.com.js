if (
  // are we on an article page?
  location.href.match(/nytimes\.com\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\//) &&
  // this isn't already single-page, is it?
  !location.search.match("pagewanted=all")
) {
  // let's do this buddy
  location.href = location.href + (location.search.length ? "&" : "?") + "pagewanted=all"
  // hell yeah
}