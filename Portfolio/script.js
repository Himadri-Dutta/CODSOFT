
        let nameElement = document.getElementById('name')  // <h1></h1>

        let text = "Himadri Dutta"

        let i = 0
        let typingSpeed = 150

        function typeName() {
            if (i < text.length)  // 0<18
            {
                nameElement.innerHTML += text.charAt(i)  // Sap
                i++  // 1
                setTimeout(typeName, typingSpeed)  // typeName,150
            }
        }

        typeName()
 