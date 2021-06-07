    window.addEventListener('DOMContentLoaded', function () {
      var avatar = document.getElementById('avatar');
      var image = document.getElementById('image');
      var input = document.getElementById('input');
      var img_value = document.getElementById('img_value');

      var $progress = $('.progress');
      var $progressBar = $('.progress-bar');
      var $alert = $('.alert');
      var $modal = $('#modal');
      var cropper;

      $('[data-toggle="tooltip"]').tooltip();

      input.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input.value = '';
          image.src = url;
          $alert.hide();
          $modal.modal('show');
        };


        var reader;
        var file;
        var url;

        if (files && files.length > 0) {
          file = files[0];

          if (URL) {
            done(URL.createObjectURL(file));
          } else if (FileReader) {
            reader = new FileReader();
            reader.onload = function (e) {
              done(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }
      });

      $modal.on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
          aspectRatio: 1,
          viewMode: 3,
        });
      }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
      });

      document.getElementById('crop').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal.modal('hide');

        if (cropper) {
          canvas = cropper.getCroppedCanvas({
            width: 160,
            height: 160,
          });
          initialAvatarURL = avatar.src;
          avatar.src = canvas.toDataURL();
          $progress.show();
          $alert.removeClass('alert-success alert-warning');
          canvas.toBlob(function (blob) {
            var formData = new FormData();

            formData.append('avatar', blob, 'avatar.jpg');
            $.ajax('/uploads', {
              method: 'POST',
              data: formData,
              processData: false,
              contentType: false,

              xhr: function () {
                var xhr = new XMLHttpRequest();

                xhr.upload.onprogress = function (e) {
                  var percent = '0';
                  var percentage = '0%';

                  if (e.lengthComputable) {
                    percent = Math.round((e.loaded / e.total) * 100);
                    percentage = percent + '%';
                    $progressBar.width(percentage).attr('aria-valuenow', percent).text(percentage);
                  }
                };

                return xhr;
              },

              success: function () {
                $alert.show().addClass('alert-success').text('Upload success');
                img_value.value = avatar.src;
              },

              error: function () {
                avatar.src = initialAvatarURL;
                $alert.show().addClass('alert-warning').text('Upload error');
              },

              complete: function () {
                $progress.hide();
              },
            });
          });
        }
      });
    });


    
window.addEventListener('DOMContentLoaded', function () {
  var avatar2 = document.getElementById('avatar2');
  var image2 = document.getElementById('image2');
  var input2 = document.getElementById('input2');
  var img_value2 = document.getElementById('img_value2');
  var $progress = $('.progress');
  var $progressBar = $('.progress-bar');
  var $alert = $('.alert');
  var $modal = $('#modal2');
  var cropper;

  $('[data-toggle="tooltip2"]').tooltip();

  input2.addEventListener('change', function (e) {
    var files = e.target.files;
    var done = function (url) {
      input2.value = '';
      image2.src = url;
      $alert.hide();
      $modal.modal('show');
    };
    var reader;
    var file;
    var url;

    if (files && files.length > 0) {
      file = files[0];

      if (URL) {
        done(URL.createObjectURL(file));
      } else if (FileReader) {
        reader = new FileReader();
        reader.onload = function (e) {
          done(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  });

  $modal.on('shown.bs.modal', function () {
    cropper = new Cropper(image2, {
      aspectRatio: 1,
      viewMode: 3,
    });
  }).on('hidden.bs.modal', function () {
    cropper.destroy();
    cropper = null;
  });

  document.getElementById('crop2').addEventListener('click', function () {
    var initialAvatarURL;
    var canvas;

    $modal.modal('hide');

    if (cropper) {
      canvas = cropper.getCroppedCanvas({
        width: 160,
        height: 160,
      });

        initialAvatarURL = avatar2.src;
        avatar2.src = canvas.toDataURL();




      $progress.show();
      $alert.removeClass('alert-success alert-warning');
      canvas.toBlob(function (blob) {
        var formData = new FormData();

          formData.append('avatar2', blob, 'avatar.jpg');


        $.ajax('/uploads', {
          method: 'POST',
          data: formData,
          processData: false,
          contentType: false,

          xhr: function () {
            var xhr = new XMLHttpRequest();

            xhr.upload.onprogress = function (e) {
              var percent = '0';
              var percentage = '0%';

              if (e.lengthComputable) {
                percent = Math.round((e.loaded / e.total) * 100);
                percentage = percent + '%';
                $progressBar.width(percentage).attr('aria-valuenow', percent).text(percentage);
              }
            };

            return xhr;
          },

          success: function () {
            $alert.show().addClass('alert-success').text('Upload success');
            img_value2.value = avatar2.src;
          },

          error: function () {
            avatar2.src = initialAvatarURL;
            $alert.show().addClass('alert-warning').text('Upload error');
          },

          complete: function () {
            $progress.hide();
          },
        });
      });
    }
  });
});
