    const firebaseConfig = {
        apiKey: "AIzaSyBd37bRx6u52wUTZGNg7xLyd8c0u80IZMM",
        authDomain: "datosdelformulario.firebaseapp.com",
        projectId: "datosdelformulario",
        storageBucket: "datosdelformulario.appspot.com",
        messagingSenderId: "1011947882744",
        appId: "1:1011947882744:web:c99ce2f8e2b2df804dd30d",
        measurementId: "G-4EVKTBYRDD"
    };

    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    document.getElementById('formulario').addEventListener('submit', (event) => {
        event.preventDefault()

        // Validar Campo Nombre
        let entradaNombre = document.getElementById('name')
        let errorNombre = document.getElementById('nameError')

        if (entradaNombre.value.trim() === '') {
            errorNombre.textContent = "Please, enter your name"
            errorNombre.classList.add('error-message')
        } else {
            errorNombre.textContent = ''
            errorNombre.classList.remove('error-message')
        }

        // Validar Correo Electronico
        let emailEntrada = document.getElementById('email')
        let emailError = document.getElementById('emailError')
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(emailEntrada.value)) {
            emailError.textContent = "Please, enter your e-mail"
            emailError.classList.add('error-message')
        } else {
            emailError.textContent = ''
            emailError.classList.remove('error-message')
        }

        // Validar la Contraseña
        let contrasenaEntrada = document.getElementById('password')
        let contrasenaError = document.getElementById('passwordError')
        let contrasenaPatter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        if (!contrasenaPatter.test(contrasenaEntrada.value)) {
            contrasenaError.textContent = "Your PASSWORD must between 8 and 15 characters, numbers, uppercase, lowercase, and special characters";
            contrasenaError.classList.add('error-message')
        } else {
            contrasenaError.textContent = ''
            contrasenaError.classList.remove('error-message')
        }

        //Enviar Formulario
        if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
            // Back que reciba la informacion
            db.collection("users").add({
                nombre: entradaNombre.value,
                email: emailEntrada.value,
                password: contrasenaEntrada.value
            })
                .then((docRef) => {
                    alert('The form has been successfully submitted.', docRef.id)
                    document.getElementById('formulario').reset();
                })
                .catch((error) => {
                    alert(error)
                });

        }

    })