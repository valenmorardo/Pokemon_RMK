const validacion = (newPokemon) => {

    let validacionName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    let validacionNumeros = /^[0-9]+$/;
    let validacionUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    let errores = {}

                        // NOMBRE
    if(newPokemon.Name) {
        if(newPokemon.Name.length > 20) {
            errores.Name = 'El maximo de caracteres para Name es 20!';
        } else if(newPokemon.Name.length < 3) {
            errores.Name = 'El minimo de caracteres para Name es 3!';
        } else if( !(validacionName.test(newPokemon.Name)) ) {
            errores.Name = 'El nombre solo puede contener letras!';
        }
    }

                        //VIDA
    if(newPokemon.Life) {

        if(!(validacionNumeros.test(newPokemon.Life))) {
            errores.Life='La Life solo puede contener numeros!';
        } else if(newPokemon.Life < 10) {
            errores.Life = 'La Life minima es 10!';
        } else if(newPokemon.Life > 9999) {
            errores.Life = 'La Life maxima es 9999!'
        }
    }

                        //ATAQUE
    if(newPokemon.Attack) {
        if(!(validacionNumeros.test(newPokemon.Attack))) {
            errores.Attack = 'El Attack solo puede contener numeros!';
        } else if(newPokemon.Attack < 5) {
            errores.Attack = 'El Attack minimo es 5!';
        } else if(newPokemon.Attack > 9999) {
            errores.Attack = 'El Attack maximo es 9999!'
        }
    }

                        //DEFENSA
    if(newPokemon.Defense) {
        if(!(validacionNumeros.test(newPokemon.Defense))) {
            errores.Defense = 'La Defense solo puede contener numeros!';
        } else if(newPokemon.Defense < 5) {
            errores.Defense = 'La Defense minima es 5!';
        } else if(newPokemon.Defense > 9999) {
            errores.Defense = 'La Defense maxima es 9999!'
        }
    }



                        //VELOCIDAD
    if(newPokemon.Speed) {
        if(!(validacionNumeros.test(newPokemon.Speed))) {
            errores.Speed = 'La Speed solo puede contener numeros!';
        } else if(newPokemon.Speed < 10) {
            errores.Speed = 'La Speed minima es 10!';
        } else if(newPokemon.Speed > 9999) {
            errores.Speed = 'La Speed maxima es 9999!'
        }    
    }

                        //ALTURA
    if(newPokemon.Height) {
        if(!(validacionNumeros.test(newPokemon.Height))) {
            errores.Height = 'La Height solo puede contener numeros!';
        } else if(newPokemon.Height < 10) {
            errores.Height = 'La Height minima es 10!';
        } else if(newPokemon.Height > 9999) {
            errores.Height = 'La Height maxima es 9999!'
        }
    }

                        //PESO
    if(newPokemon.Height) {
        if(!(validacionNumeros.test(newPokemon.Height))) {
            errores.Height = 'El Height solo puede contener numeros!';
        } else if(newPokemon.Height < 10) {
            errores.Height = 'El Height minimo es 10!';
        } else if(newPokemon.Height > 9999) {
            errores.Height = 'El Height maximo es 9999!'
        }
    }


                        //IMAGEN
    if(newPokemon.Images) {
        if( !(validacionUrl.test(newPokemon.Images)) ) {
            errores.Images = 'Ingrese un URL correcto'
        }
    }

    return errores;
}
export default validacion;