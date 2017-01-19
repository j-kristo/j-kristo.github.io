//----jquery-plagins----
include('js/jquery-1.7.1.js');
include('js/jquery.easing.js');
include('js/jquery.transform-0.9.3.min.js');
include('js/jquery.fancybox-1.3.4.pack.js');
//----Menu+ContentSwitcher----
include('js/superfish.js');
include('js/switcher.js');
//----contact form----
include('js/forms.js');
//----scroll----
include('js/jquery.mousewheel.js');
include('js/jquery.tinyscrollbar.min.js');
//----cufon----
include('js/cufon-yui.js');
include('js/Vidaloka_400.font.js');
include('js/cufon-replace.js');
//----google map----
include('js/googleMap.js');
//----spritely----
include('js/jquery.spritely-0.6.js');
//----All-Scripts----
include('js/main.js');
//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
  return false ;
}