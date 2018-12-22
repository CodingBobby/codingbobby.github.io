/*
AUTHOR: CodingBobby
DATE: 22/12/2018
VERSION: 1.4
*/


// HIDE ARTICLES

// initialization
let init = 'hidden_text'; // class of hidden html element
let hidables = []; // all hidden text containers in array
let k = 0; // counting variable for array
let initToggleButton = 'Interested? <a>Read more...</a>';

Element.prototype.insertChildAtIndex = function(child, index) {
  if(!index) index = 0
  if(index >= this.children.length) {
    this.appendChild(child) // just add it to the end
  } else {
    this.insertBefore(child, this.children[index]) // add it before an element at index
  }
}

$(document).find('.hidden_text').each(function() { // looping through all containers with class
  hidables.push({ // add array element with object of following
    parentID: this.closest('.common_content').id, // the parent with .common_content
    hidable: this, // hidden container for later reference
    status: init,
    toggle: function() { // method to show or hide container
      if(this.status == init) { // shows when text got expanded
        this.status = 'show_container';
        div.innerHTML = 'Finished reading? <a>Collapse...</a>';
      }
      else {
        this.status = init; // shows when text got/is collapsed
        div.innerHTML = initToggleButton;
      }
      this.hidable.className = this.status; // update div's class with the set status
    }
  });
  let div = document.createElement('div'); // adding div first time
  div.className = 'further_reading';
  div.innerHTML = initToggleButton;
  let parent = document.getElementById(hidables[k++].parentID); // parent element of the container
  parent.insertChildAtIndex(div, (parent.children.length-1)); // get second last element in parent
});

$('.further_reading').on('click', function() {
  let p = this.closest(".common_content"); // parent of clicked element
  let q = hidables.filter(obj => { // search for parent in hidable array which got loaded first
    return obj.parentID == p.id;
  })[0];
  q.toggle(); // switch beteen collapsed and exposed
});



// CODE SNIPPETS

$(document).find('.auto_code').each(function() {
  let parent = this.closest('.code_block'); // a single code block
  $(this).find('cl').each(x => { // code line elements
    let num = ('0' + (x+1)).slice(-2); // add 0 when line index < 10
    parent.querySelector('.code_lines').insertAdjacentHTML(
      'beforeend', // add line index after the already added ones
      `<span class="line">${num}</span><br>`
    );
  });
});
