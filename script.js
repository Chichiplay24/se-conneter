<script>
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            alert('Connexion réussie !);
            // Ici, vous ajouteriez le code pour envoyer les données au serveur
        } else {
            alert('Veuillez remplir tous les champs pour continuer.');
        }
    });
</script>
