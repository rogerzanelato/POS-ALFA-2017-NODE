const express = require( 'express' )
const router = express.Router()

const Controller = require( './controller' );


router.get('/', function( req, res, next ) {
  Controller.find( req, res, {} )
})

router.get('/:id', function( req, res, next ) {
  Controller.findOne( req, res, {} )
})

router.post('/', function( req, res, next ) {
  Controller.create( req, res )
})

router.put('/:id', function( req, res, next ) {
  Controller.update( req, res )
})

router.delete('/:id', function( req, res, next ) {
  Controller.remove( req, res )
})

module.exports = router