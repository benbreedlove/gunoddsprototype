/*
 * gunodds
 * https://github.com/motherjones/gunodds
 *
 * Copyright (c) 2013 Mother Jones Data Desk
 * Licensed under the MIT license.
 */
"use strict";

(function($) {
    var document;
    jQuery(document).ready(function() {



        var form = jQuery('#gun_odds_form');

        /*
        $('#gun_odds_form select').change( function() {
            recalculate_odds();
        });
        */


        var recalculate_odds = function() {
            /* THIS IS STUPID DO NOT USE JUST ASK OUR DATABASE
            var data= {};
            form.find('select').each(function() {
                var $this = $(this);
                var name = $this.attr('name');
                var value = $this.find(':selected').attr('value');
                data[name] = value;
            });
            */
            jQuery.get('http://apps.motherjones.com/gun_odds.json', function(data) {
                var new_odds = get_odds_from_data(data);
                update_with_new_odds(new_odds);
            })
        };

        /*
        var get_odds_from_data = function(data) {
            console.log(data);
            for (var i = 0; i < all_odds.length; i++ ) {
                var this_row = all_odds[i];
                var found = true;
                for (var key in data) {
                    if data[key]
                }
            }
        };
        */

        var update_with_new_odds = function(new_odds) {
            jQuery('#your_odds').text(new_odds);
        };










    });
}(jQuery));
