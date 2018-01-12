// $.getJSON('google.json', function(response) {
//         $.each(response, function(i, value) {
//             // $('.table-item').append($field);
//             $('<tr class="table-item table-item--center">').html(
//                 "<td class='table-item__number'>" + response[i].id + "</td><td class='table-item__image'>" + response[i].title + "</td><td class='table-item__name'>" + response[i].city + "</td><td class='table-item__name'>"+ response[i].address +"</td>").appendTo('.order-table')
//        })


// });

// (function(document) {
// 	'use strict';

// 	var LightTableFilter = (function(Arr) {

// 		var _input;

// 		function _onInputEvent(e) {
// 			_input = e.target;
// 			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
// 			Arr.forEach.call(tables, function(table) {
// 				Arr.forEach.call(table.tBodies, function(tbody) {
// 					Arr.forEach.call(tbody.rows, _filter);
// 				});
// 			});
// 		}

// 		function _filter(row) {
// 			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
// 			row.style.display = text.indexOf(val) === -1 ? `none` : 'table-row';
// 		}

// 		return {
// 			init: function() {
// 				var inputs = document.getElementsByClassName('form__input');
// 				Arr.forEach.call(inputs, function(input) {
// 					input.oninput = _onInputEvent;
// 				});
// 			}
// 		};
// 	})(Array.prototype);

// 	document.addEventListener('readystatechange', function() {
// 		if (document.readyState === 'complete') {
// 			LightTableFilter.init();
// 		}
// 	});

// })(document);