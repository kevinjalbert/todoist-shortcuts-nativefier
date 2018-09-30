// Returns the count for the 'Today' list (defaults to 0)
function currentCount() {
  return document.querySelector('#top_filters > li:nth-child(2) > span.item_content > small').innerText || 0;
}

// Returns the title without any annotated count
function titleWithoutCount() {
  const title = document.title;
  const indexOfCount = title.indexOf(" (");

  if (indexOfCount >= 0) {
    return title.substring(0, indexOfCount);
  } else {
    return title;
  }
}

// Returns the existing count from the title (defaults to 0)
function existingCount() {
  const title = document.title;
  const indexOfCount = title.indexOf(" (");

  return title.substring(indexOfCount + 2, title.length - 1) || 0
}

// Update badge count based on the number in Today
function updateBadgeCount() {
  const count = currentCount();
  const title = titleWithoutCount();
  var newTitle = document.title;

  if (count === 0) {
    newTitle = title;
  } else if (count !== existingCount()) {
    newTitle = `${title} (${count})`;
  }

  if (document.title !== newTitle) {
    document.title = newTitle
  }
}

// Update the badge every 5 seconds
setInterval(updateBadgeCount, 5000);

// Update the badge when the title changes
new MutationObserver(function(mutations) {
  updateBadgeCount();
}).observe(
  document.querySelector('title'), {
    subtree: true,
    characterData: true,
    childList: true
  }
);
