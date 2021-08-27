    window.addEventListener('DOMContentLoaded', function () {
      var avatar = document.getElementById('avatar');
      var image = document.getElementById('imagem_principal');
      var input = document.getElementById('input');
      var img_value = document.getElementById('imagem_principal_value');

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
          img_value.value = avatar.src;
          $progress.show();
          $alert.removeClass('alert-success alert-warning');
        }
      });
    });



      var avatar1 = document.getElementById('avatar1');
      var image1 = document.getElementById('imagem1');
      var input1 = document.getElementById('input1');
      var img_value1 = document.getElementById('imagem1_value');

      var $alert1 = $('.alert');
      var $modal1 = $('#modal1');
      var cropper1;

      $('[data-toggle="tooltip"]').tooltip();

      input1.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input1.value = '';
          image1.src = url;
          $alert1.hide();
          $modal1.modal('show');
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

      $modal1.on('shown.bs.modal', function () {
        cropper1 = new Cropper(image1, {
          aspectRatio: 1,
          viewMode: 3,
        });
      }).on('hidden.bs.modal', function () {
        cropper1.destroy();
        cropper1 = null;
      });

      document.getElementById('crop1').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal1.modal('hide');

        if (cropper1) {
          canvas = cropper1.getCroppedCanvas({
            width: 160,
            height: 160,
          });
          initialAvatarURL = avatar1.src;
          avatar1.src = canvas.toDataURL();
          img_value1.value = avatar1.src;
          //$progress.show();
          //$alert.removeClass('alert-success alert-warning');
        }
      });


      //IMAGEM 2

      var avatar2 = document.getElementById('avatar2');
      var image2 = document.getElementById('imagem2');
      var input2 = document.getElementById('input2');
      var img_value2 = document.getElementById('imagem2_value');

      var $alert2 = $('.alert');
      var $modal2 = $('#modal2');
      var cropper2;

      $('[data-toggle="tooltip"]').tooltip();

      input2.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input2.value = '';
          image2.src = url;
          $alert2.hide();
          $modal2.modal('show');
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

      $modal2.on('shown.bs.modal', function () {
        cropper2 = new Cropper(image2, {
          aspectRatio: 1,
          viewMode: 3,
        });
      }).on('hidden.bs.modal', function () {
        cropper2.destroy();
        cropper2 = null;
      });

      document.getElementById('crop2').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal2.modal('hide');

        if (cropper2) {
          canvas = cropper2.getCroppedCanvas({
            width: 160,
            height: 160,
          });
          initialAvatarURL = avatar2.src;
          avatar2.src = canvas.toDataURL();
          img_value2.value = avatar2.src;
          //$progress.show();
          //$alert.removeClass('alert-success alert-warning');
        }
      });
