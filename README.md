# Walmart challenge FrontEnd - By Fernando Muñoz

ES COMPATIBLE CON NODE 16!!

Esta es la parte frontend del Walmart challenge, está programada con React
el proyecto es adaptable a versión desktop y mobile

## Cómo ejecutarlo en local?

Hay varias opciones:
*   Descargando la imagen Docker alojada en Docker Hub:

    ```
    docker login
    docker pull fernando1989mg/walmart_challenge-front:v2
    docker run -p 3000:80 fernando1989mg/walmart_challenge-front:v2
    ```
    De esta manera podrá ejecutarlo en http://localhost:3000,
    
    La imagen Docker del frontend se comunica con el microservicio alojado en AWS para la búsqueda


*   Ejecutando el proyecto con npm, para esto situarse en la carpeta raiz del proyecto y ejecutar

    ```
    npm start
    ```
    con esta opción deberá tambien ejecutar el microservicio de búsqueda en su ambiente local

## Cómo funciona?

*   Al entrar a la pagina inicial, se cargan productos de forma aleatoria
*   Se puede buscar por ID de producto, por ejemplo 174
*   Se puede buscar por un termino cualquiera y arrojará resultados, si son muchos aparecerá el paginador
*   Se puede buscar por palabra palindroma, si es así aparecerán los productos con descuento, por ejemplo buscar: adsda

## Notas adicionales

El proyecto publicado en https://walmart-challenge.kawm.cl tiene una infraestructura muy básica, solamente
para propositos demostrativos, no hacerle prueba de estrés ni nada parecido porque no tiene autoescalado ni
nada muy sofisticado.
