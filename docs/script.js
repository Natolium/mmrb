const canvas = document.getElementById("canvas");        
    let imagePath = "image.png";
    draw(canvas,imagePath);
    function draw(canvas,imagePath){
        console.log("draw");
        const image = new Image();
        image.addEventListener("load",function (){
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            console.log("load!");
        });
        image.src = imagePath;
    }
