<script>
    jQuery( document ).ready(function() {
    
    jQuery("#pa_nautic-cases").change(function(){
        console.log("change");
       refreshImage();
    });
     jQuery("#pa_nautic1-capsulas").change(function(){
         console.log("change");
       refreshImage();
    });
    jQuery("#pa_strap").change(function(){
        console.log("change");
       refreshImage();
    });
    
    jQuery("li").mouseup(function(){
        refreshImage();
    });
    refreshImage(1);
    console.log("start-preview");
});



var imgFolder = "https://hkoblerwatches.ch/wp-content/uploads/v5/";

    
async function refreshImage(delay = 400){
    await new Promise(r => setTimeout(r, delay));
    console.log("refreshing");
    var selectedItems = jQuery(".selected");
    jQuery.each(selectedItems, function( index, value ) {
        var attributeId = jQuery(jQuery(value)[0]).attr('data-value')
        if(attributeId!=null){
            
            if(attributeId.startsWith("cas")){ //Cases
            console.log("This case: "+ attributeId);
            jQuery(".mp-case img").attr("src", imgFolder + attributeId+".png");
            jQuery(".mp-case-bottom img").attr("src", imgFolder + attributeId+"-bottom.png");
            }
            else if(attributeId.startsWith("cap")){  //Capsula
            jQuery(".mp-capsula img").attr("src", imgFolder + attributeId+".png");
            }
            else if(attributeId.startsWith("str")){  //Straps
            jQuery(".mp-strap img").attr("src", imgFolder + attributeId+".png");
            }
            jQuery(".mp-crown img").attr("src", imgFolder +"CROWN.png");
        }
    });

}
</script>
<style>
    .mp-img{
    margin: 0;
    position: absolute;
    /* top: 50%; */
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%;
    }
    .mp-frame{
               margin-top: 1vh;
    height: 60vh;
    margin-bottom: -1vh;
    margin-right: -2vh;
    padding-top: 100px;
    }
    .mp-bg{
        position: relative;
        z-index: -1;
        visibility: hidden;
    }
    .mp-case{
        z-index: 3;
    }
    .mp-capsula{
        z-index: 2;
    }
    .mp-strap{
        z-index: 1;
    }
        
    .mp-case-bottom{
        z-index: 0;
    }
    
    
    .mp-img img {
         /*  min-width: 120vh;*/
    max-height: 90vh; 
    }
    

</style>
<div class="mp-frame" >
    <div class="mp-case mp-img">
        <img src=""/>
    </div>
    <div class="mp-capsula mp-img">
        <img src=""/>
    </div>
    <div class="mp-case-bottom mp-img">
        <img src=""/>
    </div>
    <div class="mp-strap mp-img">
        <img src=""/>
    </div>
    <div class="mp-crown mp-img">
        <img src=""/>
    </div>
    <div class="mp-bg mp-img">
        <img src="https://hkoblerwatches.ch/wp-content/uploads/2021/01/wallpaperdark.png" onload="refreshImage()"/>
    </div>
</div>
