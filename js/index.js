$(document).ready(function(){
    //send an ajax request at loading products for sell
    $.get("lib/routes/products/viewProducts.php", function (res) {
      //display data 
      $("#products").html(res);
    })
       
    //send an ajax request at loading products for sell
    $.get("lib/routes/products/viewBProducts.php", function (res) {
      //display data 
      $("#books").html(res);
    })
    
    //search items 
    $("#searchData").on('input',function(){
            $inputData = $(this).val();

            $.get("lib/routes/products/productSearchb.php",{searchData:$inputData},function(res){
              $("#books").html(res);
          })
            //send an ajax request 
            $.get("lib/routes/products/productSearch.php",{searchData:$inputData},function(res){
                $("#products").html(res);
            });

           
    })

    $("#productCategory").on('click', function () {
      $inputData = $(this).val();

      if($inputData==0){
        $.get("lib/routes/products/viewProducts.php", function (res) {
          //display data 
          $("#products").html(res);
        })
      }
      else{
            //send an ajax request 
            $.get("lib/routes/products/productSearchcat.php",{searchData:$inputData},function(res){
                $("#products").html(res);
            })
          }
    })

    $("#bookCategory").on('click', function () {
      $inputData = $(this).val();

      if($inputData==0){
        $.get("lib/routes/products/viewBProducts.php", function (res) {
          //display data 
          $("#books").html(res);
        })
      }
      else{
            //send an ajax request 
            $.get("lib/routes/products/productSearchcatb.php",{searchData:$inputData},function(res){
                $("#books").html(res);
            })
          }
    })

})
