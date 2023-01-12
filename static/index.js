window.onload = () => {
  $("#sendbutton").click(() => {
    $("#link").css("visibility", "hidden");
    link = $("#link");
    input = $("#imageinput")[0];
    if (input.files && input.files[0]) {
      $('#spinner').css("display", "block");
      document.body.style.pointerEvents = "none";
      $('#back').css("display", "block");
      let formData = new FormData();
      formData.append("video", input.files[0]);
      $.ajax({
        url: "/detect", // fix this to your liking
        type: "POST",
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        error: function (data) {
          console.log("upload error", data);
          console.log(data.getAllResponseHeaders());
          document.body.style.pointerEvents = "auto";
          $('#spinner').css("display", "none");
          $('#back').css("display", "none");
        },
        success: function (data) {
          console.log(data);
          // bytestring = data["status"];
          // image = bytestring.split("'")[1];
          $("#link").css("visibility", "visible");
          $("#download").attr("href", "static/" + data);
          document.getElementById("download").click();
          document.body.style.pointerEvents = "auto";
          $('#spinner').css("display", "none");
          $('#back').css("display", "none");
          },
      });
    }
  });
//   $("#opencam").click(() => {
//     console.log("evoked openCam");
//     $.ajax({
//       url: "/opencam",
//       type: "GET",
//       error: function (data) {
//         console.log("upload error", data);
//       },
//       success: function (data) {
//         console.log(data);
//       }
//     });
//   })
};

function readUrl(input) {
  // imagebox = $("#imagebox");
  // console.log(imagebox);
  console.log("evoked readUrl");
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      console.log(e.target);
      document.getElementById("upload").textContent = input.files[0].name;
      // imagebox.attr("src", e.target.result);
      // imagebox.height(500);
      // imagebox.width(800);
    };
    reader.readAsDataURL(input.files[0]);
  }
}


// function openCam(e){
//   console.log("evoked openCam");
//   e.preventDefault();
//   console.log("evoked openCam");
//   console.log(e);
// }