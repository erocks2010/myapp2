//*******************Header Menu bubdiConcept1******************************************************************

var executeMenuSet = function (color_Nav_Menu, height_Nav_Menu, max_Menu_Items, size_Menu_Item, color_Menu_Items, _detail_Menu_Links) {
  var _count_Menu_Items = 0;
  var _max_Menu_Items = max_Menu_Items;
  var _arrange_Menu_Items = new Array();
  var _size_Menu_Item = size_Menu_Item;
  var _visibility_Switch = true;
  var _is_First_Load = true;
  var _color_Nav_Menu = color_Nav_Menu;
  var _height_Nav_Menu = height_Nav_Menu;
  var _menu_Items = new Array();
  var _color_Menu_Items = color_Menu_Items;
  switch (_max_Menu_Items) {
    case 1:
      _arrange_Menu_Items.push(1);
      break;
    case 2:
      _arrange_Menu_Items.push(2);
      break;
    case 3:
      _arrange_Menu_Items.push(2);
      _arrange_Menu_Items.push(1);
      break;
    case 4:
      _arrange_Menu_Items.push(2);
      _arrange_Menu_Items.push(2);
      break;
    case 5:
      _arrange_Menu_Items.push(3);
      _arrange_Menu_Items.push(2);
      break;
    case 6:
      _arrange_Menu_Items.push(3);
      _arrange_Menu_Items.push(3);
      break;
    case 7:
      _arrange_Menu_Items.push(4);
      _arrange_Menu_Items.push(3);
      break;
  }
  //Create Menu Items--------------------------
  function createMenuItems() {
    $('body').append("<div id='Nav-Menu'></div>");
    $("#Nav-Menu").css('position', 'absolute');
    $("#Nav-Menu").css('left', '0');
    $("#Nav-Menu").css('top', '0');
    $("#Nav-Menu").append("<div class=\"Nav-Menu-Div1\"></div>");
    $("#Nav-Menu").append("<div class=\"Nav-Menu-Div2\"></div>");
    $(".Nav-Menu-Div1,.Nav-Menu-Div2").css('width', '100%');
    $(".Nav-Menu-Div1").css('height', _height_Nav_Menu + 'em');
    $(".Nav-Menu-Div2").css('height', 'auto');
    $(".Nav-Menu-Div1").css('background-color', _color_Nav_Menu);
    //add items to the parent base element.
    _arrange_Menu_Items.forEach(function(item, index) {
      for (let i = 0; i < item; i++) {

        let _innerHTML = "<div class=\"Menu-Item Item" + _count_Menu_Items + " Row" + index + "\"><div>";
        $("#Nav-Menu").append(_innerHTML);
        //set css properties 
        $(".Item" + _count_Menu_Items).css('top', (_size_Menu_Item * index) + _height_Nav_Menu + 'em');
        $(".Item" + _count_Menu_Items).css('left', '' + (i * _size_Menu_Item) + 'em');
        $(".Item" + _count_Menu_Items).css('background-color', _color_Menu_Items[_count_Menu_Items]);
        
        let _innerHTML2="<a class=\"Menu-Item-Anchor\" href=\""+_detail_Menu_Links[_count_Menu_Items]["Link"]+"\">"+_detail_Menu_Links[_count_Menu_Items]["DisplayName"]+"</a>"
        $(".Item" + _count_Menu_Items).append(_innerHTML2);
        console.log(_innerHTML2);
        _count_Menu_Items++;
      }

    });
    $(".Menu-Item").each(function(index) {
      _menu_Items.push($(this));
    });
    $(".Menu-Item").hide();
    $("#Nav-Menu").css('width', '' + (_arrange_Menu_Items[0] * _size_Menu_Item) + "em");
    $("#Nav-Menu").css('height', _height_Nav_Menu + "em");
    $("#Nav-Menu").css('z-index', '999');
    $('.Menu-Item').css('position', 'absolute');
    $('.Menu-Item').css('width', _size_Menu_Item+'em');
    $('.Menu-Item').css('height', _size_Menu_Item+'em');
    $('.Menu-Item').css('line-height', _size_Menu_Item + 'em');
    $('.Menu-Item').css('text-align', 'center');
    $('.Menu-Item-Anchor').css('text-decoration', 'none');
    $('.Menu-Item-Anchor').css('font-family', 'Abril Fatface');
    $('.Menu-Item-Anchor').css('font-size', '1em');
    $('.Menu-Item-Anchor').css('font-weigth', '400');
    $('.Menu-Item-Anchor').css('color','black');
    $('.Menu-Item-Anchor').css('display', 'block');
    $('.Menu-Item-Anchor').css('height', _size_Menu_Item+'em');
    $('.Menu-Item-Anchor').css('width',_size_Menu_Item+'em');    
  }
  //-----------------------------------------------------------------------
  createMenuItems();

  //Toggle Menu Items Visibility------------------------------------------
  function showMenu() {
    $("#Nav-Menu").css('height', '' + ((_arrange_Menu_Items.length * _size_Menu_Item) + _height_Nav_Menu) + "em");
    let i = 0;
    (function showAfterTimeout() {
      if (i < _menu_Items.length) {
      setTimeout(function() { 
          _menu_Items[i].toggle("size",230);
          i++;
          showAfterTimeout();
        }, 80);
      }
    })();
  }

function hideMenu() {
    $("#Nav-Menu").css('height',  _height_Nav_Menu + "em");
    let i = 0;
    (function showAfterTimeout() {
      if (i < _menu_Items.length) {
      setTimeout(function() { 
          _menu_Items[i].toggle("size",230);
          i++;
          showAfterTimeout();
        }, 80);
      }
    })();
  }

  //-------------------------------------------------------------------------------
  $("#Nav-Menu").on("mouseenter", showMenu);
  $("#Nav-Menu").on("mouseleave", hideMenu);
    
}

//********************************************************************************************************************************

//************************************Shape Container**************************************************
var createShapeContainer=function($container,_main_Image_Path,_content){
 $container.append("<div id=\"Shape-Container\"><div id=\"Shape-Container-Div\"><div id=\"Shape-Container-Div-Image\"><img src=\""+_main_Image_Path+"\" /></div></div><p id=\"Shape-Container-Content\">"+_content+"</p></div>");
}
