$('.enter-button').on('click', function(){
  var websiteTitle = $('#website-title').val();
  var websiteUrl = $('#website-url').val(); 
  newCard(websiteTitle, websiteUrl); 
})

function newCard(title, url) {
  $( ".bookmark-container" ).prepend( `
    <div class="saved-website">
      <h2>${title}</h2>
      <div class="url-section">
        <a class="saved-url-link" href=${url} alt="Website Description" >${url}</a>
      </div>
      <div>
        <input type="submit" name="read" value="Read" class="bookmark-buttons" />
        <input type="submit" name="delete" value="Delete" class="bookmark-buttons delete-button" />
      </div>
    </div>
  `
 );
}

// toggleClass, hasClass, prepend, do checklist, 
//single responsibilty functions, read .on docs for read 
// functionality