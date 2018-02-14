const Model = require( './model' )

const ACTION_PATH = "./../../";
const create = require( ACTION_PATH + 'actions/create' )( Model )
const find = require( ACTION_PATH + 'actions/find' ) ( Model )
const findOne = require( ACTION_PATH + 'actions/findOne' ) ( Model )
const update = require( ACTION_PATH + 'actions/update' ) ( Model )
const remove = require( ACTION_PATH + 'actions/remove' ) ( Model )

module.exports = {
  find,
  create,
  findOne,
  update,
  remove
}