### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción del Código de la Práctica

1. [Eloquent JS: The Secret Life of Objects. Lying Out a Table](http://eloquentjavascript.net/06_object.html##h_36C2FHHi44)
2. [Repo original de esta práctica](https://github.com/ULL-ESIT-DSI-1617/oop-eloquentjs-example)

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea. 
2. Separe las clases `UnderlinedCell`, `TexCell`, etc. en distintos ficheros exportando los objetos adecuados
3. Reescriba las clases usando ECMA6
4. Añada pruebas para cada una de las clases `UnderlinedCell`, `TexCell`, etc
5. Añada integración continua usando Travis
6. Entrege los enlaces al repo en GitHub y a Travis


### Recursos

## El principio *Open/Closed*

"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; 
that is, such an entity can allow its behaviour to be extended without modifying its source code.

## Strategy Design Pattern

Vea como funciona en este vídeo.
Preste especial atención al *code smell* **Switch Statement Smell** desde el minuto 11:37 al 29:15.

{% youtube %}https://www.youtube.com/watch?v=JVlfj7mQZPo{% endyoutube %}

Pueden encontrar las [trasparencias](http://elijahmanor.com/talks/js-smells/#/) de la presentación en [http://elijahmanor.com/talks/js-smells/#/](http://elijahmanor.com/talks/js-smells/#/).

The basic idea  of the `strategy design pattern` is to **delegate tasks to encapsulated algorithms which are interchangable at runtime**.

In the Strategy pattern we have an object (the *context*) that is trying to get something done. But to get that thing done, we need to supply the context with a second object, called the *strategy*, that helps￼ to get the thing done.

  1. Define a family of objects which all do the same thing
  2. Ensure the family of objects share the same interface so that they are interchangable.

Otro ejemplo, también de Elijah Manor se encuentra en el artículo [Switching to the Strategy Pattern in JavaScript](http://elijahmanor.com/switching-to-the-strategy-pattern-in-javascript/).

* [Apuntes: Programación Orientada a Objetos](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/oop/)
* [Apuntes: Pruebas. Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Apuntes: Pruebas. Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#shouldl)
* [Apuntes: Integración Contínua. Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)
