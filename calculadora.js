let botones = document.querySelectorAll("button");
let resultado = document.getElementById('Resultado');
    
botones.forEach((boton) => {

    boton.addEventListener('mouseover', () =>{

        boton.style.transform = 'scale(1.2)';
        boton.style.transition = '0.6s';
    });

    boton.addEventListener('mouseout', () =>{
        boton.style.transform = 'scale(1.0)';
        boton.style.transition = '0.6s';
    });

    boton.addEventListener('click', () =>{ 
        let botonPulsado = boton.textContent;

        if(boton.id === "Borrar"){
            resultado.textContent = "0";
            return;

        }

        if(boton.id === "borrarUltimoDigito"){
            resultado.textContent = resultado.textContent.slice(0, -1);
            return;
        }

        if(boton.id === "Igual"){
            resultado.textContent = eval(resultado.textContent);
            return;

        }

        if(resultado.textContent === "0"){
            resultado.textContent = botonPulsado;
        }
        else{
            resultado.textContent += botonPulsado; 
        } 

    });
});
    

