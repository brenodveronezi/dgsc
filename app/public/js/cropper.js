    window.addEventListener('DOMContentLoaded', function () {
      var avatar = document.getElementById('avatar');
      var image = document.getElementById('imagem_principal');
      var input = document.getElementById('input');
      var img_value = document.getElementById('imagem_principal_value');

      var $progress = $('.progress');
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
          

          var imagem = avatar.src;
          var nome_imagem_principal = Date.now();
          img_value.value = nome_imagem_principal;
          

          $.post('/salva-imagem-principal', {imagem: imagem, nome : nome_imagem_principal});
        }
      });




      //IMAGEM 1

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


          var imagem1 = avatar1.src;
          var nome_imagem1 = Date.now();
          img_value1.value = nome_imagem1;
           

          $.post('/salva-imagem1', {imagem: imagem1, nome : nome_imagem1});
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


          var imagem2 = avatar2.src;
          var nome_imagem2 = Date.now();
          
          img_value2.value = nome_imagem2;

          $.post('/salva-imagem2', {imagem: imagem2, nome : nome_imagem2});
          
        }
      });

      //IMAGEM 3

      var avatar3 = document.getElementById('avatar3');
      var image3 = document.getElementById('imagem3');
      var input3 = document.getElementById('input3');
      var img_value3 = document.getElementById('imagem3_value');

      var $alert3 = $('.alert');
      var $modal3 = $('#modal3');
      var cropper3;

      $('[data-toggle="tooltip"]').tooltip();

      input3.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input3.value = '';
          image3.src = url;
          $alert3.hide();
          $modal3.modal('show');
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

      $modal3.on('shown.bs.modal', function () {
        cropper3 = new Cropper(image3, {
          aspectRatio: 1,
          viewMode: 3,
        });
      }).on('hidden.bs.modal', function () {
        cropper3.destroy();
        cropper3 = null;
      });

      document.getElementById('crop3').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal3.modal('hide');

        if (cropper3) {
          canvas = cropper3.getCroppedCanvas({
            width: 160,
            height: 160,
          });
          initialAvatarURL = avatar3.src;
          avatar3.src = canvas.toDataURL();


          var imagem3 = avatar3.src;
          var nome_imagem3 = Date.now();

          img_value3.value = nome_imagem3;
           

          $.post('/salva-imagem3', {imagem: imagem3, nome : nome_imagem3});
        }
      });



      //IMAGEM 4

      var avatar4 = document.getElementById('avatar4');
      var image4 = document.getElementById('imagem4');
      var input4 = document.getElementById('input4');
      var img_value4 = document.getElementById('imagem4_value');

      var $alert4 = $('.alert');
      var $modal4 = $('#modal4');
      var cropper4;

      $('[data-toggle="tooltip"]').tooltip();

      input4.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input4.value = '';
          image4.src = url;
          $alert4.hide();
          $modal4.modal('show');
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

      $modal4.on('shown.bs.modal', function () {
        cropper4 = new Cropper(image4, {
          aspectRatio: 1,
          viewMode: 3,
        });
      }).on('hidden.bs.modal', function () {
        cropper4.destroy();
        cropper4 = null;
      });

      document.getElementById('crop4').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal4.modal('hide');

        if (cropper4) {
          canvas = cropper4.getCroppedCanvas({
            width: 160,
            height: 160,
          });
          initialAvatarURL = avatar4.src;
          avatar4.src = canvas.toDataURL();

          
          var imagem4 = avatar4.src;
          var nome_imagem4 = Date.now();
           
          img_value4.value = nome_imagem4;

          $.post('/salva-imagem4', {imagem: imagem4, nome : nome_imagem4});
        }
      });


      //IMAGEM 5

      var avatar5 = document.getElementById('avatar5');
      var image5 = document.getElementById('imagem5');
      var input5 = document.getElementById('input5');
      var img_value5 = document.getElementById('imagem5_value');

      var $alert5 = $('.alert');
      var $modal5 = $('#modal5');
      var cropper5;

      $('[data-toggle="tooltip"]').tooltip();

      input5.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input5.value = '';
          image5.src = url;
          $alert5.hide();
          $modal5.modal('show');
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

      $modal5.on('shown.bs.modal', function () {
        cropper5 = new Cropper(image5, {
          aspectRatio: 1,
          viewMode: 3,
        });
      }).on('hidden.bs.modal', function () {
        cropper5.destroy();
        cropper5 = null;
      });

      document.getElementById('crop5').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal5.modal('hide');

        if (cropper5) {
          canvas = cropper5.getCroppedCanvas({
            width: 160,
            height: 160,
          });
          initialAvatarURL = avatar5.src;
          avatar5.src = canvas.toDataURL();


          var imagem5 = avatar5.src;
          var nome_imagem5 = Date.now();

          img_value5.value = nome_imagem5;
           

          $.post('/salva-imagem5', {imagem: imagem5, nome : nome_imagem5});
        }
      });


    });