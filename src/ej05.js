let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
    const Url = new URL(laURL);
    return {
      host: Url.origin,
      pathname: Url.pathname,
      parametros: Url.searchParams,
    };
}
