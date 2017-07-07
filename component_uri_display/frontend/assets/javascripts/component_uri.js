$(document).ready(function() {

  $.fn.extend({

    updateComponentUri: function() {

      console.log('updateComponentUri');

      var activeComponentUri = null;

      var updateUri = function() {

        var activeTreeItem = $('#archives_tree li.archival_object.primary-selected').first();
        var selectedComponentUri = $(activeTreeItem).attr('data-uri');

        if (selectedComponentUri != activeComponentUri) {
          activeComponentUri = selectedComponentUri;
          console.log(activeComponentUri);
        }
      }

      $( document ).ajaxComplete(function() {
        updateUri();
      });

    }

  });

  $(document).updateComponentUri();

});
