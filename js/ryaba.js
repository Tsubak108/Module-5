 $(document).ready(function() { 

    const $button = $(".button");
    const $result = $(".result");
    let finalText = '';

    $.getJSON( 
        'https://api.myjson.com/bins/jcmhn',
        function(data) {
            const $initial = $(".initial");
            $initial.html(data.text);            

            $button.on("click", function() {
                const $var1 = $("input.var1").val();
                const $var2 = $("input.var2").val();
                const $var3 = $("input.var3").val();
                const $var4 = $("input.var4").val();
                const $var5 = $("input.var5").val();
                const $var6 = $("input.var6").val();
                const $speach = $("input.speach").val();               
        
                data.text.forEach(function(item, index) {
                    item = item.replace("{var1}", $var1);
                    item = item.replace("{var2}", $var2);
                    item = item.replace("{var3}", $var3);
                    item = item.replace("{var4}", $var4);
                    item = item.replace("{var5}", $var5);
                    item = item.replace("{var6}", $var6);
                    item = item.replace("{speach}", $speach);

                    finalText = finalText + item + "<br/>";
                    }
                );
                $result.html(finalText); 
            });
        }
    )
});