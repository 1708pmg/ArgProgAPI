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

### Puntos a mejorar en App Clima
+ *Mejorar la estética en CSS.*
+ *Mejorar el gráfico de Temperatura por hora.*
+ *Trabajar más el código y profundizar el empleo de Prosps los datos.* 
+ *El Fetch esta realizado en App,js, trasladarlo al componente Clima.jsx*

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

### Puntos a mejorar en App Transporte.
+ *Trabajar mejor el CSS.*
+ *Darle mejor estilo al dropdown y las imagenes de los colectivos*
+ *Organizar mejor los componentes en las carpetas para que todo quede mas limpio y ordenado*
+ *Profundizar en como estructurar los comentarios y realizar el Readme con MarkDown.*

### Conclusión
Si bien me ha costado y sigue costando la comprension y lógica de los códigos, hay mucho por aprender y mejorar. Y no claudicar en el intento. Agradezco a los profesores y ayudantes por la disposicion a solucionar todos los problemas que se han presentado. 







