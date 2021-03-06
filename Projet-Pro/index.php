<!doctype html>
<html lang="fr">

<head>
  <title>My-fit</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500&display=swap" rel="stylesheet">
  <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>



  <div class="container mainContainer">
    <div class="row">
      <div class="col-8 mx-auto">
        <div class="row p-2 formulaire shadow-lg">
          <div class="logo text-center mx-auto">
            <img src="assets/img/logo-musculation2.png" alt="" class="mx-auto h-100">
          </div>

          <div class="login col-12 mx-auto">
            <h1 class="text-center"> My Fit <span>.</span></h1>
            <h2 class="text-center"> Identification </h2>

            <form class="align-item text-center">
              <input type="text" name="username" placeholder="Nom d'utilisateur" required="required" class="m-2" />
              <input type="password" name="password" placeholder="Mot de passe" required="required" />
            </form>
            <div class="row">
              <div class=" col-12 mt-2 text-center align-item-center">
                <a href="/page-Home/nouveautest.php" type="button" class="btn btn-primary btn-rounded">
                  <strong> Connexion</strong></a>
              </div>
            </div>
            <div class="row">
              <div class=" col-12 mt-2 text-center align-item-center">
                <button type="button" class="btn btn-primary btn-rounded " data-toggle="modal" data-target="#darkModalForm">
                  <strong> Inscription</strong>
              </div>
            </div>

          </div>



        </div>





        <!-- Modal -->
        <div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div class="modal-dialog form-dark" role="document">
            <!--Content-->
            <div class="modal-content card card-image"
              style="background-image: url(./assets/img/pexels-leon-martinez-1552252.jpg);">
              <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <!--Header-->
                <div class="modal-header text-center pb-4">
                  <h3 class="modal-title w-100 white-text font-weight-bold mt-2" id="myModalLabel">
                    <strong>Bienvenue, veuillez remplir tous les champs pour vous inscrire.</strong></h3>
                  <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <!--Body-->
                <div class="modal-body">
                  <!--Body-->
                  <div class="md-form mb-2">
                    <input type="email" id="Form-email5" class="form-control validate white-text"
                      placeholder="Enter votre adresse e-mail">
                    <label data-error="wrong" data-success="right" for="Form-email5"><strong>Enter votre adresse
                        e-mail</strong></label>
                  </div>

                  <div class="md-form pb-3">
                    <input type="password" id="Form-pass5" class="form-control validate white-text"
                      placeholder="Enter votre mot de passe">
                    <label data-error="wrong" data-success="right" for="Form-pass5"> <strong>Entrez votre mot de
                        passe</strong></label>
                    <div class="md-form pb-3">
                      <input type="password" id="Form-pass5" class="form-control validate white-text"
                        placeholder="Confirme votre mot de passe">
                      <label data-error="wrong" data-success="right" for="Form-pass5"><strong>Veuillez confirmez votre
                          mot
                          de passe</strong></label>
                      <div class="form-group mt-4">
                        <input class="form-check-input" type="checkbox" id="checkbox624">
                        <label for="checkbox624" class="white-text form-check-label">
                          Accepte les <a href="#" class="green-text font-weight-bold"> condition générales </a></label>
                      </div>
                    </div>

                    <!--Grid row-->
                    <div class="row d-flex align-items-center mb-4">

                      <!--Grid column-->
                      <div class="text-center mb-3 col-md-12">
                        <button type="button"
                          class="btn btn-primary btn-block btn-rounded z-depth-1"><strong>Envoyer</strong></button>
                      </div>
                      <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <!--Grid row-->
                    <div class="row">

                      <!--Grid column-->
                      <div class="col-md-12">
                        <p class="font-small white-text d-flex justify-content-end">Vous avez déjà un compte ? <a
                            href="#" class="green-text ml-1 font-weight-bold">
                            Connectez-vous</a></p>
                      </div>
                      <!--Grid column-->

                    </div>
                    <!--Grid row-->

                  </div>
                </div>
              </div>
              <!--/.Content-->
            </div>
          </div>

        </div>

      </div>
    </div>


  </div>





  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
  </script>

</body>

</html>