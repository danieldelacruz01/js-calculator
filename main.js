$(document).ready(function(){
  $("button.input").click(function() {
    var current = $("input").val();
    $("input").val(current + $(this).val());
  });

  $("button#calculate").click(function() {
    var result = eval($("input").val());
    $("input").val(result);
  });

  $("button#ac").click(function() {
    $("input").val("");
  });

  $("button#ce").click(function() {
    var splitArray = ($("input").val()).split("");
    var splicedArray = splitArray.splice(-1);
    var joinedString = splitArray.join("");
    $("input").val(joinedString);
  });
});