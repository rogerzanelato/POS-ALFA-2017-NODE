const express = require( 'express' )
const router = express.Router()

const Controller = require( './../controllers' );


/* GET users listing */
router.get('/', function( req, res, next ) {
  Controller.find( req, res, {} )
  // res.json( { name: 'Roger' } )
})

/* GET user by id */
router.get('/:id', function( req, res, next ) {
  Controller.findOne( req, res, {} )
})

/* ADD users */
router.post('/', function( req, res, next ) {
  Controller.create( req, res )
})

/* ADD users */
router.put('/:id', function( req, res, next ) {
  Controller.update( req, res )
})

/* DELETE */
router.delete('/:id', function( req, res, next ) {
  Controller.remove( req, res )
})

module.exports = router