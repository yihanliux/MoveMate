document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Running analysis page script...");

    // 获取视频 URL
    fetch("/get_video")
    .then(response => response.json())
    .then(data => {
        console.log("✅ Server response from /get_video:", data);  // 🔍 检查 Flask 返回的 JSON

        if (data.video_url) {
            console.log("✅ Setting video source to:", data.video_url);
            const videoPlayer = document.getElementById("videoPlayer");
            videoPlayer.src = data.video_url;
            videoPlayer.load();
        } else {
            console.error("❌ No video URL received from server!");
        }
    })
    .catch(error => {
        console.error("❌ Error fetching video URL:", error);
    });

    function checkStatus() {
        fetch("/check_status")
        .then(response => response.json())
        .then(data => {
            if (data.done) {
                document.getElementById("loading-container").style.display = "none";
                document.querySelector(".loader").style.display = "none";
                document.getElementById('result-container').style.display = 'flex';

                // const segment1 = data.Segment1;
                // document.getElementById("icon1").innerHTML = segment1;
                // const segment2 = data.Segment2;
                // document.getElementById("result-text1").innerHTML = segment2;
                // const segment3 = data.Segment3;
                // document.getElementById("icon2").innerHTML = segment3;
                // const segment4 = data.Segment4;
                // document.getElementById("result-text2").innerHTML = segment4;

                // 更新图片
                const resultImage_1 = document.getElementById("result-image-1");
                resultImage_1.src = data.up_image;
                resultImage_1.style.display = 'block';

                const leftImage = document.getElementById("result-image-2");
                leftImage.src = data.left_image;
                leftImage.style.display = 'block';

                const rightImage = document.getElementById("result-image-3");
                rightImage.src = data.right_image;
                rightImage.style.display = 'block';


            //     const resultImage1 = document.getElementById("suggestion-image-1");
            //     if (data.image_url_1 != null) {  // 确认 image_url_2 不是 None 或 null
            //         resultImage1.src = data.image_url1;
            //         resultImage1.style.display = 'block';
            //     } else {
            //         resultImage1.style.display = 'none';  // 如果是 None 或 null，则不展示图片
            //     }

            //     const resultImage2 = document.getElementById("suggestion-image-2");
            //     if (data.image_url_2 != null) {  // 确认 image_url_2 不是 None 或 null
            //         resultImage2.src = data.image_url2;
            //         resultImage2.style.display = 'block';
            //     } else {
            //         resultImage2.style.display = 'none';  // 如果是 None 或 null，则不展示图片
            //     }
            // } else {
            //     setTimeout(checkStatus, 2000);
            }
        });
    }
    checkStatus();
});
