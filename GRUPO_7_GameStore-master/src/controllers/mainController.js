const fs = require('fs');
const path = require('path');

const gamesFilePath = path.join(__dirname, '../data/gamesDB.json');
const games = JSON.parse(fs.readFileSync(gamesFilePath, 'utf-8'));

const controller = {
    home: (req, res) => {
        let play = games.filter(element => element.console === 'Play');
        let xbox = games.filter(element => element.console === 'Xbox');
        let nintendo = games.filter(element => element.console === 'Nintendo');
        let pc = games.filter(element => element.console === 'PC');

        return res.render('home', { play: play, xbox: xbox, nintendo: nintendo, px: pc});
    },
    register: (req, res) => {
        return res.render('register');
    },
    login: (req, res) => {
        return res.render('login');
    },
    cart: (req, res) => {
        return res.render('productCart');
    },
    detail: (req, res) => {
        return res.render('productDetail');
    },
    adminNewProduct: (req, res) => {
        return res.render('adminNewProduct');
    },
    adminEditProduct: (req, res) => {
        return res.render('adminEditProduct');
    }
}

module.exports = controller;