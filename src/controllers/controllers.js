//importamos los modulos necesarios
import  cheerio from 'cheerio';
import axios from 'axios';
//guardamos en una constante la url
const URL = 'https://webscraper.io/test-sites/e-commerce/allinone/computers';

//exportamos la función que se utilizara en la ruta productos 
export const scraping = (req, res) => {
    axios(URL)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const producto = [];

        //capturamos los elementos necesarios en el div con clase caption
        $('div.caption', html).each(function () {
            const nombre = $(this).find('a.title').attr('title');
            const precio = $(this).find('h4.price').text();
            const descripcion = $(this).find('p.description').text();

            producto.push({
                nombre,
                precio,
                descripcion
            });
        });
        //se manda como respuesta el array de objetos en formato json
        res.json(producto);
    })
    .catch((err) => console.log(err));
}