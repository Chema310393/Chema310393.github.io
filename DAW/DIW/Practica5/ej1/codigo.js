{
    function init() {
        let canvas = document.getElementById("canvas");
        let ctx;
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
            ctx.moveTo(110, 75);
            ctx.fill();
            var time = new Date();
            ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            ctx.translate(105, 0);

        }
    }


    window.addEventListener("load", init);
}