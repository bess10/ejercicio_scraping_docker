//import { response } from 'express';
import  cheerio from 'cheerio';
import axios from 'axios';

const URL = 'https://webscraper.io/test-sites/e-commerce/allinone/computers';

export const scraping = (req, res) => {
    axios(URL)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const producto = [];

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
        res.json(producto);
    })
    .catch((err) => console.log(err));
}