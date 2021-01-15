<!doctype html>
<html lang="fr">

<head>
  <title>My-fit</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- jQuery and JS bundle w/ Popper.js -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
  </script>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css">
  <link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500&display=swap" rel="stylesheet">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <!--Navbar -->

  <header>

    <a href="#" class="logo"> My-Fit <span>.</span> </a>
    <div class="menuToggle" onclick="toggleMenu()" id="toggleMenu"></div>
    <ul class="navigation" id="navigation">
      <li><a href="/page-Home/nouveautest.php">Accueil</a></li>
      <li><a href="/page-Exercice/exercice.php"> Entrainement </a></li>
      <li><a href="/page-Suivi/Suivi.php">Mon Suivi</a></li>
      <li><a href="#expert"></a>Expert</li>
      <li><a href="#contact"></a>contact</li>
    </ul>


  </header>

  <!--/.Navbar -->



  <div class="sectionnn">

    <section class="banner" id="banner">
      <div class="content">

      </div>

    </section>

  </div>

  <div class=" graf col-9">
    <canvas id="myChart"></canvas>
  </div>



  <!-- Footer -->
  <footer class="page-footer font-small indigo bg-light">

    <!-- Footer Links -->
    <div class="container text-center text-md-left ">

      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-3 mx-auto">

          <img class="logo-footer pt-2 pl-4" src="Projet-pro/assets/img/logo-musculation2.png" height="110" alt="logo-footer">
          <!-- Links -->
          <h3 class="font-weight-bold text-uppercase mt-2 mb-4" id="footerMyfit"> My-Fit <span>.</span></h3>

          <ul class="list-unstyled">
            <li>
              <a href="#!">Mention légale</a>
            </li>
            <li>
              <a href="#!">Vie Privée</a>
            </li>
            <li>
              <a href="#!">CGV</a>
            </li>
            <li>
              <a href="#!">Préferences de cookies</a>
            </li>
          </ul>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-3 mx-auto pt-lg-5">

          <!-- Links -->
          <h3 class="font-weight-bold text-uppercase mt-3 mb-4 pt-lg-5 titreFooter">Contact</h3>

          <ul class="list-unstyled">
            <li>
              <i class="fas fa-map-marker-alt mt-2"></i>66 rue de Paris 76600 Le Havre</a>
            </li>
            <li>
              <i class="fas fa-phone"></i> Tél: 02 35 99 59 69</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>Email: <a href="my-fit@gmail.com"></a> my-fit@gmail.com</p></a>
            </li>
            <li>
              <i class="fab fa-skype"></i> MY-FIT
            </li>
          </ul>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-3 mx-auto pt-lg-5">

          <!-- Links -->
          <h3 class="font-weight-bold text-uppercase mt-3 mb-4 pt-lg-5 titreFooter">Suivez-nous</h3>


          <p>
            <a href="#"><i class="fab fa-facebook  mt-2 m-1"></i></a>
            <a href="#"><i class="fab fa-twitter m-1"></i></a>
            <a href="#"><i class="fab fa-google-plus-g m-1"></i></a>
            <a href="#"><i class="fab fa-instagram m-1 "></i></a>
            <a href="#"><i class="fab fa-pinterest m-1"></i></a>
          </p>
        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
      <a href=""> MY-FIT </a>
    </div>
    <!-- Copyright -->

  </footer>
  <!-- Footer -->

  </div>



  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script src="script.js"></script>

</body>

</html>