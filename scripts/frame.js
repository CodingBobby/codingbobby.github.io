/*
AUTHOR: CodingBobby
DATE: 27/08/2018
VERSION: 1.0
*/

let init = 'hidden_text';
let hidables = [];
let k = 0;
let initToggleButton = 'Interested? <a>Read more...</a>';

Element.prototype.insertChildAtIndex = function(child, index) {
  if (!index) index = 0
  if (index >= this.children.length) {
    this.appendChild(child)
  } else {
    this.insertBefore(child, this.children[index])
  }
}

$(document).find('.hidden_text').each(function() {
  hidables.push({
    parentID: this.closest('.common_content').id,
    hidable: this,
    status: init,
    toggle: function() {
      if(this.status == 'hidden_text') {
        this.status = 'show_container';
        div.innerHTML = 'Finished reading? <a>Collapse...</a>';
      }
      else {
        this.status = 'hidden_text';
        div.innerHTML = initToggleButton;
      }
      this.hidable.className = this.status;
    }
  });
  let div = document.createElement('div');
  div.className = 'further_reading';
  div.innerHTML = initToggleButton;
  let parent = document.getElementById(hidables[k++].parentID);
  parent.insertChildAtIndex(div, (parent.children.length-1));
});

$('.further_reading').on('click', function() {
  let p = this.closest(".common_content");
  let q = hidables.filter(obj => {
    return obj.parentID == p.id;
  })[0];
  q.toggle();
});
