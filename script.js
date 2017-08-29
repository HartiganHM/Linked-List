/*Buttons*/
$('.enter-button').on('click', function(){
  var websiteTitle = $('#website-title').val();
  var websiteUrl = $('#website-url').val(); 
  newCard(websiteTitle, websiteUrl); 
});

/*Functions*/
function newCard(title, url) {
  $( ".bookmark-container" ).prepend( `
    <div class="saved-website">
      <h2>${title}</h2>
      <div class="url-section">
        <a class="saved-url-link" href=${url} alt="Website Description" >${url}</a>
      </div>
      <div>
        <input type="submit" name="read" value="Read" class="bookmark-buttons" id="read-button" />
        <input type="submit" name="delete" value="Delete" class="bookmark-buttons delete-button" />
      </div>
    </div>
  `
 );
  addReadClass();
};

function addReadClass() {
  console.log('Butt');
  readButton();
  readSavedWebsite();
  readUrl();
};

function readButton() {
  var readButton = $('#read-button').on('click', function() {
    readButton.hasClass('read-button')?
    (readButton.removeClass('read-button')):
    (readButton.addClass('read-button'));
  })
}

function readSavedWebsite() {
  var savedWebsite = $('.saved-website');
  $('#read-button').on('click', function() {
    savedWebsite.hasClass('read-website')?
    (savedWebsite.removeClass('read-website')):
    (savedWebsite.addClass('read-website'));
  })
}

function readUrl() {
  var readUrl = $('.saved-url-link');
  $('#read-button').on('click', function() {
    readUrl.hasClass('read-url-link')?
    (readUrl.removeClass('read-url-link')):
    (readUrl.addClass('read-url-link'));
  })
}

// toggleClass, hasClass, prepend, do checklist, 
//single responsibilty functions, read .on docs for read 
// functionality