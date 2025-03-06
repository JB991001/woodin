$(document).ready(function () {
    $("#fullpage").fullpage({
        sectionsColor: ["#daea99", "#bdeaf1", "#e8d4ef", "#f2ddc7"],
        anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
        menu: "#rightNav",
        onLeave:  ( i , j )=> {
        $("#rightNav a")
            .eq(j - 1)
            .addClass("act")
            .siblings()
            .removeClass("act");
            console.log(`현재: ${i} 다음 ${j}`);
            if( i !== 0 ) $('.section').eq(i).addClass('move');						
        }
    });

    $("#rightNav a").click(function () {
        $(this).addClass("act").siblings().removeClass("act");
    });
});