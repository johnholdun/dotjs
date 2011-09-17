// this would go in _imgur.com.js or whatever
// but i don't know of definitive support for wildcard subdomains yet
// :(
if (location.host.indexOf("imgur.com") !== -1)
  $(function() {
    $(".advertisement, #social, #share-link").remove()
  })