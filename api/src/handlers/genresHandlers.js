/* GET GENRES
-  Obtiene un arreglo con todos los géneros existentes de la API.
-  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos 
los géneros que encuentres en la API.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de 
obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo 
desde allí.
*/

const getGenres = (req,res) => {
    res.status(200).send('aca vienen los genres');
};

module.exports = { getGenres} ;