$(function() {
  var
    t = $("#jamTitle").text().trim() + " by " + $("#jamArtist").text().trim().replace(/^by ?/, ""),
    desc = $("blockquote.userDescription").text().trim(),
    url
    
  if (desc.match(/\bthis\b/i)) {
    t = desc.replace(/\bthis\b/i, t)
  } else {
    t += " is my jam."
    if (desc.length) t += " " + desc
  }
     
  url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(location.href.replace(/(www\.|\/$)/, ""))
  
  $("<a>", { "class": "button", "text": "Tweet", "id": "jhJamTweet", "href": url })
    .insertAfter("#sharePanelCaller")
})