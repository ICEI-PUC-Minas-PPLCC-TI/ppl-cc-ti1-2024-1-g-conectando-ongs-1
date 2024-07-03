$(document).ready(function() {
  function loadNavBar() {
    const userType = sessionStorage.getItem('userType'); // Assuming userType is stored in sessionStorage
    const navbarItems = $('#navbarItems');
    navbarItems.empty();

    if (!userType) {
      navbarItems.append(`
        <li class="nav-item">
          <a class="btn btn-primary ml-2" href="login.html">Entrar</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-secondary ml-2" href="signup.html">Criar Conta</a>
        </li>
      `);
    } else if (userType === 'user') {
      navbarItems.append(`
        <li class="nav-item"><a class="nav-link text-light" href="ap-ongs.html">ONGs Cadastradas</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="ap-campaign.html">Campanhas Cadastradas</a></li>
        <div class="dropdown ml-2">
          <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${sessionStorage.getItem('userName')}
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="logout.html">Sair</a>
          </div>
        </div>
      `);
    } else if (userType === 'org') {
      navbarItems.append(`
        <li class="nav-item"><a class="nav-link text-light" href="ap-ongs.html">ONGs Cadastradas</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="ap-campaign.html">Campanhas Cadastradas</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="subscribed-users.html">Mostrar Usuarios Cadastrados</a></li>
        <li class="nav-item"><a class="nav-link text-success" href="make-campaign.html">Criar Nova Campanha</a></li>
        <div class="dropdown ml-2">
          <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${sessionStorage.getItem('userName')}
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="campaigns-config.html">Configurar Campanhas</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="logout.html">Sair</a>
          </div>
        </div>
      `);
    }
  }

  loadNavBar();
});
