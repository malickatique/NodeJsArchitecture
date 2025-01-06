const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomPhone = () => getRandomInt(1000000, 9999999);

module.exports = {
    getRandomInt,
    getRandomPhone,
};
