let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
    try{
        const Url = new URL(laURL);
        return {
            host: Url.origin,
            pathname: Url.pathname,
            parametros: Url.searchParams,
            };
    }
    catch(error)
    {
        console.log("Error al buscar la URL")
        return null;
    }

}
