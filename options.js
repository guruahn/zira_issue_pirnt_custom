// Saves options to chrome.storage.sync.
function save_options() {
  var color = document.getElementById('color').value;
  var titleSize = document.getElementById('title-size').value;
  chrome.storage.sync.set({
    favoriteColor: color,
    titleSize: titleSize
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'FF0000' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'FF0000',
    titleSize: 'xl'
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('title-size').value = items.titleSize;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);