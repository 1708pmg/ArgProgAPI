# Dashboard Clima - Transporte
El proyecto se realiza en **React**.
El proyecto es crear un dashboard para una app de **Clima** y otra de **Transporte**, importando los datos de las  APIs correspondientes.
Ambos dashboard deben presentarse en pantalla dividida y fijas.
## Dashboard Clima
Se divide en distintas etiquetas que corresponden a : Ciudad, Fecha y hora, Temperatura actual, Estado del clima, Humedad, Visibilidad, Viento, Calidad del Aire, Salida y puesta de Sol, Temperatura máxima y mínima , Temperatura por hora con un grafico que lo representa. 

### Primera estapa para Clima
Es crear el un dasborad de manera estática, donde importamos los datos que  nos aporta https://open-meteo.com/, Solamente elejimos una ciudad y un dia y lo bajamos como un archivo.json. Estos datos aportados son importados a cada uno de los componentes realizados en React. para la **App Clima**. 
Se han incorporado iconos para cada una de las etiquetas.Dichos iconos fueron sacados de algunas paginas de iconos de forma gratuita y otras las dibuje en Power-Point (flechas temperatura máxima y mínima y salida y puesta de sol)
En tal tag V0 no estaba organizado el dasboard 

### Segunda etapa para Clima
En esta estapa utilizamos la url de https://api.open-meteo.com donde seleccionamos los mismos elementos que en la primera etapa, pero lo cargamos a nuesta App con **fecht** utilizando **useState** y **useEffect** para pasarle a todos y cada uno de nuestros componentes la informacion que nos proporciona la API. 
En el caso Calidad Aire, lo he dejado estático porque la APi Open meteo, no lo proporciona. En un principio queria reemplazarlo por Indice UV, pero no llegue hacerlo por el tiempo de entrega. 

### Problemas presentados en Clima
Se me han presentado muchos problemas al pasar por Props la data de Api. Se rompió muchas veces el codigo. El mayor problema se presentó en el formateo de la fecha y la hora porque baje una biblioteca y al no saberla usar correctamente se me rompió todo el codigo. Al no poder resolverlo, volvi a la commit anterior y empece nuevamente. 

### Mejoras y desmejoras
Agregue la opcion con un select para elegir distintas ciudades a traves de un archivo JSON.Cuando el usuario escribe una letra se despliegan los nombre de las ciudades que comienzan con dicha letra.  Al agregar esta opcion se modificó el tamaño del dashborard y no lo pude solucionar por tiempo.

### Puntos a mejorar en App Clima
+ *Mejorar la estética en CSS.*
+ *Mejorar el gráfico de Temperatura por hora.*
+ *Trabajar más el código y profundizar el empleo de Prosps los datos.* 
+ *Usar la Api para elegir las ciudades y no un archivo json estatico*

## Dashboard Transporte
Para realizar la App de Transporte primero descargamos la libreria de React **Leaflet** https://react-leaflet.js.org/. De esa manera se descarga el map que vamos a utlizar. Elejimos la ciudad de Buenos Aires porque usamos la Api que nos provee API de transporte de la Ciudad de Buenos Aires.

### Desarrollo
La Api nos da todas las lineas de colectivos que recorren la zona del AMBA. Elegí solo 10 lineas de colectivos para realizar la demostracion. Codifiqué un *dropdown* con sólo las lineas filtradas de la Api para que el usuario elija una linea y en el mapa se visualice el recorrido de dicha linea seleccionada. Y al elegir otra linea, la anterior desaparece del mapa.
Para diferenciar las lineas usé imagenes con los números que corresponden a cada una de ellas. Dichas imagenes se obtienen de un archivo de imagenes que se encuenta en SRC.
Otra libreria utilizada para la Popup fue L-Leaflet.

### Problemas presentados en Transporte
Se presentaron distintos problemas:
- La Api estaba muy inestable y por momentos no cargaba los datos, para solucionar momentaneamente el problema utilice un archivo.json con los datos que brinda la Api, pero de manera estática, lo que me permitió armar toda la App.Cuando la API funcionó ya se podian ver los colectivos en movimiento a tiempo real.
- Manifeste dos problemas:
-  Al desplazarse el colectivo los marcadores se pisaban entre si. El problema estaba en como habia codificado el Market, al cambiarla comenzo a funcionar correctamente.
-  El otro problema era que al seleccionar otra linea la anterior quedaba fija en el mapa y no desaparecia como era el objetivo. Este problema tambien esta ocacionado por la codificacion de L- Leaflet. Al cambiar la Key se solucionó.

- Instale dos veces por error la biblioteca select-react y se me rompio todo. Mi ayudante Neheun Rognone (con infinita paciencia) me ayudó a hacer una rama con el error y luedo clonar el repo. No puedo explicar como lo realizamos porque solo segui las instrucciones y sin bien me iba explicando cada paso dado, no llegué a asimilar los conceptos. Me queda como enseñanza no querer incursionar con una biblioteca nueva sin informarme antes somo se usa correctamente. Luego que solucionamos el problema y tenia nuevamente mi trabajo como para continuar decide no usar la bibliote selet-react y seguir con los conocimientos que ya tengo. 

### Mejoras y desmejoras
- Mejoras : tenia el selector de colectivos por numero de linea e incorpore dos select mas, uno para que el usuario eleja por destino y otro por agencia. Solo estan selecionadas las agencias y los destinos a las lineas filtradas y no a la informacion total que ofrece la Api
- Desmejoras: Lo que agregué no funciona. No puedo hacer que se vea la imagen del marcador en el mapa del numero del colectivo cuando se selecciona por destino o por agencia. Solo se ve el marcador cuando selecciono la linea. Esteticamente es feo y desordenado y no me alcanzo el tiempo para mejorarlo. 

### Puntos a mejorar en App Transporte.
+ *Trabajar mejor el CSS.*
+ *Darle mejor estilo al dropdown y las imagenes de los colectivos*
+ *Organizar mejor los componentes en las carpetas para que todo quede mas limpio y ordenado*
+ *Profundizar en como estructurar los comentarios y realizar el Readme con MarkDown.*

### Conclusión
Si bien me ha costado y sigue costando la comprension y lógica de los códigos, hay mucho por aprender y mejorar. Y no claudicar en el intento. Agradezco a los profesores y ayudantes por la disposicion, dedicacion y tiempo extra fuera de los horarios de clase para solucionar todos los problemas que se han presentado. Excelente experiencia.







