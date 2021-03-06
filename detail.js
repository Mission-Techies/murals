/*global $*/

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}

var url_one_mural = function() {
  var url_id = $.urlParam('muralID');
  return 'https://api.airtable.com/v0/appC2gzawbLgSvOeE/Art/' + url_id +'?api_key=' + api_key;
}

// This runs on the detail view
function renderOneMural(mural) {
      var mural_name = mural.fields['Name/Description'];
      var mural_where = mural.fields['Where'];
      var mural_pics = mural.fields['Pic'];
      var mural_info = '';
      if (mural_name) {
        mural_info +=`<div class="panel panel-default">`;
          mural_info +=`<div class="panel-body">`;
          if (mural_pics) {
            $.each(mural_pics, function(i, pic){
              mural_info +=`<a href="detail.html?muralID=${mural.id}"><img src="${pic.url}"></a>`;
            });
          }
          mural_info +=`</div>`;
        mural_info += `<div class="panel-footer">Name: ${mural_name}<br>Location: ${mural_where}</div>`;
        mural_info +=`</div>`;
      }
      $('.mural-detail').append(mural_info);
}

$.get(url_one_mural(), renderOneMural);   

