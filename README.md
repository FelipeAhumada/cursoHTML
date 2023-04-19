## **Tipos de Selectores del DOM**

### ¿Que son los objetos DOM? **

Los objetos DOM en JavaScript son objetos que representan elementos HTML en una página web. El acrónimo DOM significa Document Object Model, lo que se traduce como "Modelo de Objetos del Documento" en español.

El DOM es una representación jerárquica de la estructura de una página web, en la que cada elemento HTML es un objeto dentro de un árbol de objetos. Los objetos del DOM permiten a los desarrolladores web manipular el contenido y la estructura de una página web mediante el uso de JavaScript.

Cada objeto del DOM tiene propiedades que representan los atributos del elemento HTML, como el texto, la clase, el ID, entre otros. Además, los objetos del DOM también tienen métodos que permiten a los desarrolladores web interactuar con los elementos HTML y modificar su contenido, estilo y estructura.

En resumen, los objetos del DOM en JavaScript son objetos que representan los elementos HTML en una página web y que permiten a los desarrolladores web interactuar y manipular el contenido, estilo y estructura de una página web mediante el uso de JavaScript.


Como identificados los objetos dentro del DOM 

1. document: es el objeto principal del DOM y se utiliza para acceder a todos los demás objetos en el documento web.

2. window: es el objeto global del navegador y proporciona acceso a la ventana del navegador, incluyendo la barra de direcciones, los botones de navegación y la consola de JavaScript.

3. document.body: se utiliza para acceder al elemento body de la página web, que es donde se colocan la mayoría de los elementos de la página.

4. document.getElementById(): es un método que se utiliza para acceder a un elemento del documento mediante su ID. Por ejemplo, document.getElementById("mi-elemento") devuelve el elemento con el ID "mi-elemento".

5. document.querySelector(): es un método que se utiliza para acceder a un elemento del documento utilizando selectores CSS. Por ejemplo, document.querySelector(".mi-clase") devuelve el primer elemento que tiene la clase "mi-clase".

6. document.getElementsByTagName(): es un método que se utiliza para acceder a un conjunto de elementos en el documento mediante su nombre de etiqueta. Por ejemplo, document.getElementsByTagName("p") devuelve todos los elementos p del documento.

7. document.getElementsByClassName(): es un método que se utiliza para acceder a un conjunto de elementos en el documento mediante su clase. Por ejemplo, document.getElementsByClassName("mi-clase") devuelve todos los elementos que tienen la clase "mi-clase".