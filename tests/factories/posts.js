var Factory = require('rosie').Factory;
var faker = require('faker');

module.exports = new Factory()
   // no need to set id, it will be set by REST API
   .attr('author', () => faker.name.findName())
   .attr('title', () => faker.lorem.sentence())
   .attr('body', () => faker.lorem.paragraph())
   .attr('createdAt',()=>new Date());