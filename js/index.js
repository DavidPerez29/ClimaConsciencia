
alert("¡Bienvenido a ClimaConsciencia! \nTu punto de encuentro para aprender, reflexionar y actuar frente al cambio climático. Aquí encontrarás información clara y actualizada sobre los desafíos ambientales que enfrenta nuestro planeta, junto con consejos prácticos y herramientas para calcular tu huella ecológica. Únete a nosotros en esta misión por proteger nuestro hogar común y construir un futuro sostenible para las próximas generaciones. ¡El cambio comienza contigo!")

alert("¡Elige por donde quieres empezar!")

Menu()





function Menu() {

    let eleccion = 0
    do {

        eleccion = parseInt(prompt("Elige una accion: \n 1.Introducción al Cambio Climático.\n 2.Calcular Huella de Carbono Personal.  \n  3.Consejos Prácticos para Reducir tu Impacto."))

        switch (eleccion) {
            case 1:
                 prompt("El calentamiento global es uno de los desafíos más graves que enfrenta el planeta en la actualidad. Este fenómeno se "+
                "refiere al aumento de la temperatura promedio de la atmósfera y los océanos debido a la acumulación de gases de efecto "+
                "invernadero, como el dióxido de carbono (CO₂), metano (CH₄) y óxidos de nitrógeno (NOx). Las principales fuentes de estas "+
                "emisiones son las actividades humanas, como la quema de combustibles fósiles para la generación de energía, el transporte "+
                "y la industria, así como la deforestación, que reduce la capacidad de los bosques para absorber CO₂ de la atmósfera.n\n"+

                "La deforestación es otro factor clave que contribuye al calentamiento global, ya que los árboles juegan un papel fundamental"+
                "en la absorción de CO₂. Al talar bosques, se libera CO₂ almacenado en la madera, mientras que se reduce la capacidad de la "*
                "Tierra para capturar más dióxido de carbono. Además, la agricultura y la ganadería intensiva emiten grandes cantidades de metano,"+
                "un gas de efecto invernadero mucho más potente que el CO₂. Este ciclo de emisiones y deforestación crea un círculo vicioso que "+
                "agrava el problema del cambio climático.\n"+

                "Las consecuencias del calentamiento global son amplias y afectan tanto a los ecosistemas como a las sociedades humanas. "+
                "Uno de los efectos más evidentes es el aumento del nivel del mar debido al derretimiento de los glaciares y las capas de "+
                "hielo en los polos. Esto pone en riesgo a las comunidades costeras y a las islas bajas, amenazando la vida de millones de "+
                "personas. Además, el cambio climático está provocando fenómenos meteorológicos extremos, como huracanes más intensos, olas "+
                "de calor, sequías prolongadas e inundaciones, lo que pone en peligro la seguridad alimentaria y el acceso al agua potable.\n"+

                "A medida que el calentamiento global progresa, se observa una pérdida significativa de biodiversidad. Muchos animales y "+
                "plantas no pueden adaptarse rápidamente a los cambios en su hábitat, lo que provoca la extinción de especies. Además, los "+
                "ecosistemas marinos, como los arrecifes de coral, están siendo especialmente vulnerables debido al aumento de la temperatura"+
                "del agua y la acidificación de los océanos. La mitigación de estos efectos requiere esfuerzos globales para reducir las "+
                "emisiones de gases de efecto invernadero, promover fuentes de energía renovables y proteger los ecosistemas naturales a "+
                "través de políticas y acciones concretas en todos los niveles.");
                
                break;
        
            case 2:
                
                break;
        
            case 3:
                
                break;
        
            default:
                alert("Parece ser que no has elegido una opcion valida, vuelve a elegir una opcion del menu")
                break;
        }


        
    } while (eleccion != 1 || eleccion != 2 || eleccion != 3);
    




}

