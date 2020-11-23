# Markdown Links

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.


***


### Instalación

`npm i md-links-vancalaf`

### CLI (Command Line Interface - Interfaz de Línea de Comando)

La librería se ejecuta de la siguiente manera, desde la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:


(Si es solo un archivo .md)

`$ md-links README.md`

![solo-archivo](https://github.com/victoria-ancalaf/SCL014-md-links/blob/master/img/solo-archivo.PNG)

(Si quieres leer todos los archivos .md dentro de una carpeta)

`$ md-links ./`

![leer-carpeta](https://github.com/victoria-ancalaf/SCL014-md-links/blob/master/img/leer-carpeta.PNG)

### Options

##### `--validate`

La opción `--validate` imprime si el link funciona o no. Si el link resulta en una redirección a una
URL que responde: OK, entonces consideraremos el link como válido.

Por ejemplo:

`$ md-links README.md --validate`

![validate](https://github.com/victoria-ancalaf/SCL014-md-links/blob/master/img/validate.PNG)

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

`$ md-links README.md --stats`

![stats](https://github.com/victoria-ancalaf/SCL014-md-links/blob/master/img/stats.PNG)

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

`$ md-links README.md --validate --stats`

![validate-stats](https://github.com/victoria-ancalaf/SCL014-md-links/blob/master/img/validate-stats.PNG)

***
### Dependencies

[node-fetch](https://www.npmjs.com/package/node-fetch)
[chalk](https://www.npmjs.com/package/chalk)
