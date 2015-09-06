/**
 * Created by jlee on 9/5/15.
 */

var history_nav = (function () {
  var hist_max = 20;
  var hist_list = [];

  var data_view = function( uid, label, icon_class, data_url ) {

    return {
      "uid" : uid,
      "label": label,
      "icon_class": icon_class,
      "data_url": data_url
    };
  };


  var push = function ( uid, label, icon_class, data_url) {
    console.log('push( ' + uid + ', ' + label + ', ' + data_url + ' )');

    var new_data_view = data_view(uid, label, icon_class, data_url);

    if (!contains(new_data_view)) {
      if (hist_list.length == hist_max) {
        hist_list.splice(hist_list.length - 1, 1);
      }
      hist_list.push(new_data_view);
    }

    return new_data_view;
  };

  var pop = function () {
    return hist_list.pop();
  };

  var contains = function (data_view) {

    var found = false;
    _.each(hist_list, function (element) {

      if (element.uid === data_view.uid && element.data_url === data_view.data_url) {
        found = true;
      }

    });

    console.log('contains( ' + data_view.uid + ' ) ' + found);

    return found;
  };

  var getFirst = function () {
    console.log('getFirst()');

    return hist_list.shift();
  };

  var getLast = function () {
    console.log('getLast()');

    return hist_list.pop();
  };

  var getAll = function () {
    return hist_list;
  };

  var getHistByID = function (uid) {

    var target;
    _.each(hist_list, function (element) {

      if (element.uid === uid) {
        target = element;
      }

    });

    return target;
  };

  var getHistByDataURL = function (data_url) {
    console.log( 'getHistByDataURL(' + data_url + ')' );

    var target;
    _.each(hist_list, function (element) {

      if (element.data_url === data_url) {
        target = element;
      }

    });

    return target;
  };

  var initialize = function() {
    hist_list = [];

    push('hist_dashboard_home',
         ' Dashboard',
         'fa fa-tachometer',
         '/');

    refreshUI();

  }

  var refreshUI = function() {


    console.log( 'user_hist[' + hist_list.length + ']' );

    clearUI();
    //var view_home = '<li><button id=\"breadcrumb_dashboard_home\" class=\"breadcrumb-button\" ><i class=\"fa fa fa-tachometer\"></i> Dashboard</button></li>';
    //$('#hist_list').append( view_home );

    _.each(hist_list, function( element ) {
      console.log( '\t' + element.label + ', ' + element.uid + ', ' + element.icon_class + ', ' + element.data_url );

      var button = $('<button />', {
        type: 'button',
        class: 'breadcrumb-button',
        html: '<i class=\"' + element.icon_class + '\"/></i>' + element.label,
        value: element.uid,
        id: element.uid,
        on: {
          click: function () {
            console.log( 'hist-item-selected : ' + this.id + ', data-url: ' + element.data_url );

            if (this.id == 'hist_dashboard_home') {
              dashboard_content.open();
            }
            else {
              loadSearchResult( element.data_url );
            }
          }
        }
      });

      var hist_item = $( '<li/>' )
      hist_item.append( button );

      //var hist_item = '<li><button class=\"breadcrumb-button\" id=\"' + element.uid + '\" ><i class=\"' + element.icon_class + '\"/></i>' + element.label + '</button></li>';

      //console.log( '\t' + html_text );
      $('#hist_list').append( hist_item );

    });

  };

  var clearUI = function () {
    $('#hist_list li').each(function () {
      $(this).remove();
    });
  }

  var removeLast = function () {
    var last_item = $('#hist_list li:last-child');
    if(last_item) {
      last_item.remove();
    }
  }


  return {
    "push": push,
    "pop": pop,
    "getFirst": getFirst,
    "getAll": getAll,
    "getHistByID": getHistByID,
    "getHistByDataURL": getHistByDataURL,
    "refreshUI": refreshUI,
    "initialize": initialize
  }

}());