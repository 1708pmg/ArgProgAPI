# Dashboard Clima - Transporte
El proyecto se realiza en React.
El proyecto es crear un dashboard para una app de **Clima** y otra de **Transporte**, importando los datos de las  APIs correspondientes.
Ambos dashboard deben presentarse en pantalla dividida y fijas.
### Dashboard Clima
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

### Puntos a mejorar
+ *Mejorar la estetica en CSS.*
+ *Mejorar el grafico de Temperatura por hora.*
+ *Trabajar más el código y profundizar el empleo de Prosps los datos.* 





