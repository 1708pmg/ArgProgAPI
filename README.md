# Proyecto dashboard para Clima y Transporte
El proyecto es crear una dashborad para crear una app de Clima y otra de Transporte, importando los datos de APIs.
En esta primera estaba establecemos la pantalla divida en dos para presentar ambos dashboard.
El proyecto se realiza en React. 

### Dashboard Clima
Se divide en distintas etiquetas que corresponden a : Ciudad, Fecha y hora, Temperatura actual, Estado del clima, Humedad, Visibilidad, Viento, Calidad del Aire, Salida y puesta de Sol, Temperatura máxima y mínima , Temperatura por hora con una grafico. 

### Primera estapa para Clima
Es crear el un dasborad de manera estatica, donde importamos los datos que  nos aporta https://open-meteo.com/, Solamente elejimos una ciudad y un dia y lo bajamos como un archivo .json. Estos datos aportados son importados a cada uno de los componentes realizados en React. para la App Clima. 
Se han incorporado iconos para cada una de las etiquetas.Dichos iconos fueron sacados de algunas paginas de iconos de forma gratuita y otras las dibuje en Power-Point (flechas temperatura maxima y minima y salida y puesta de sol)
En tal tag V0 no estaba organizado el dasboard 

### Segunda etapa para Clima
En esta estapa utilizamos la url de https://api.open-meteo.com donde seleccionamos los mismos elementos que en la primera etapa, pero lo cargamos a nuesta App con fecht utilizando useState y useEffect para pasarle a todos y cada uno de nuestros componentes la informacion que nos proporciona la API. 
En el caso Calidad Aire, lo he dejado estático porque la APi Open meteo, no lo proporciona. En un principio queria reemplazarlo por Indice UV, pero no llegue hacerlo por el tiempo de entrega. 

### Problemas
Se me han presentado muchos problemas al pasar por Props la data de Api. Se rompió muchas veces el codigo. El mayor problema se presentó en el formateo de la fecha y la hora porque baje una biblioteca y al no saberla usar correctamente se me rompió todo el codigo. Al no poder resolverlo, volvi a la commit anterior y empece nuevamente. 

### Puntos a mejorar
Mejorar la estetica en CSS , que no logro manejarlo bien hasta el momento. 
Mejorar el grafico de Temperatura por hora. 
Trabajar mas el codigo y profundizar mas el empleo de Prosps los datos. 




