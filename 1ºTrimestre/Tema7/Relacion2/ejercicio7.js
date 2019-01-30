$("#boton").click(function () {
    $("#container").find("div:nth-child(-n+2)").animate({
        width: "70%",
        backgroundColor: "blue"
    },1500)
})