$(function(){
    addHtml();
});
function addHtml(){   
    var row = '';
    for(var i = 0;i < 5;i++){
        var box = '';
        for(var j = 0;j < 5;j++){
            var panels = '';
            for(var k = 0;k < 6;k++){ 
                panels += '<div class="panel panel-'+k+'" style="background-position:'+ (-j * 100) +'px '+ (-i * 100) +'px;"></div>';               
            }
            box += '<div class="box box-'+j+'" style="left:'+(j*100)+'px;">'+panels+'</div>';
        } 
        row += '<div class="row row-'+i+'" style="">'+box+'</div>';
    }

    $('.wrap').html(row) 
}
