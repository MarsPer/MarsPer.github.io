$(function(){
    addHtml();
});
function addHtml(){   
    var row = '';
    for(var i = 0;i < 2;i++){
        var box = '';
        for(var j = 0;j < 2;j++){
            var panels = '';
            for(var k = 0;k < 6;k++){ 
                panels += '<div class="panel panel-'+k+'" style="background-position:'+ (-j * 200) +'px '+ (-i * 200) +'px;"></div>';               
            }
            box += '<div class="box box-'+i+''+j+'" style="left:'+(j*200)+'px;">'+panels+'</div>';
        } 
        row += '<div class="row row-'+i+'" style="">'+box+'</div>';
    }

    $('.wrap').html(row) 
}
