/*Listeners*/
$('.enter-button').on('click', function(){
  var websiteTitle = $('#website-title').val();
  var websiteUrl = $('#website-url').val();
  if (validateUrl(websiteUrl) === false) {
    return;
  } else {
    newCard(websiteTitle, websiteUrl); 
    disableEnter();
    countRead();
  }
});

$('input').on('keyup', disableEnter)

$('section').on('click', function(){
  countRead();
  disableClear();
})

$('.clear-button').on('click', function(){
  clearRead();
})

/*Functions*/
function addReadClass() {
  readButton();
  readSavedWebsite();
  readUrl();
};

function countRead(){
  var clickedRead = $('.read-website').length;
  var totalCount = $('.bookmark-buttons#read-button').length;
  var unclickedRead = totalCount - clickedRead;
  $('.toRead').text(unclickedRead);
  $('.doneReading').text(clickedRead);
  $('.myTotal').text(totalCount);
}

function disableEnter() {
  if ($('#website-title').val()!=="" && $('#website-url').val()!=="") {
    $('#enter-button').prop('disabled', false);
  } else {
    $('#enter-button').prop('disabled', true);
  }
}

function newCard(title, url) {
  $( ".bookmark-container" ).prepend( `
    <div class="saved-website" id="saved-website" >
      <h2>${title}</h2>
      <div class="url-section">
        <a class="saved-url-link" id="saved-url-link" href=${url} alt="Website Description" >${url}</a>
      </div>
      <div>
        <input type="submit" name="read" value="Read" class="bookmark-buttons" id="read-button" />
        <input type="submit" name="delete" value="Delete" class="bookmark-buttons delete-button" />
      </div>
    </div>
  `
 );
  addReadClass();
  removeCard();
};

function readButton() {
  var readButton = $('#read-button').on('click', function() {
    readButton.toggleClass('read-button');
  })
}

function readSavedWebsite() {
  var savedWebsite = $('#saved-website');
  $('#read-button').on('click', function() {
    savedWebsite.toggleClass('read-website');
  })
}

function readUrl() {
  var readUrl = $('#saved-url-link');
  $('#read-button').on('click', function() {
    readUrl.toggleClass('read-url-link');
  })
}

function removeCard(){
  $('.delete-button').on('click', function(event) {
  $(event.target).closest('.saved-website').remove();
 });
}

function countRead(){
  var clickedRead = $('.read-website').length;
  var totalCount = $('.bookmark-buttons#read-button').length;
  var unclickedRead = totalCount - clickedRead;
  $('.toRead').text(unclickedRead);
  $('.doneReading').text(clickedRead);
  $('.myTotal').text(totalCount);
}

function clearRead(){
  $('.read-website').remove();
}

function disableClear() {
  if ($('.bookmark-buttons#read-button').length != 0) {
    $('#clear-button').prop('disabled', false);
    console.log('turn off disabled');
  } else {
    $('#clear-button').prop('disabled', true);
    console.log('keep it disabled');
  }
}

function validateUrl(url) {
  var websiteInput = $('input#website-url');
  var validator = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
  if(!validator.test(url)){
    websiteInput.css('background-color', '#FFC2B7');
    alert('Please Enter a Valid URL \(ie http\(s\)\:\/\/www\.\.\.\)');
    return false;
  } else {
    websiteInput.css('background-color', '#FFF');
    return true;
  }
}
