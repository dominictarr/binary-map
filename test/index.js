var search = require('../').search
var KV = require('../')

var createHash = require('crypto').createHash

function hash (h) {
  return createHash('sha256').update(h).digest()
}

var tape = require('tape')

tape('insert', function (t) {
  var kv = KV()

  kv.set(1, 'one')

  kv.set(0, 'zero')
  kv.set(-1, 'negative one')

  console.log(kv.toJSON())

  t.deepEqual(kv.toJSON(), [
    {key: -1, value: 'negative one'},
    {key: 0, value: 'zero'},
    {key: 1, value: 'one'}
  ])

  t.end()
})

tape('insert buffers', function (t) {

  var kv = KV()

  kv.set(hash('a'), 'a')
  kv.set(hash('b'), 'b')
  kv.set(hash('c'), 'c')
  kv.set(hash('d'), 'd')
  kv.set(hash('e'), 'e')

  console.log(kv)

  t.deepEqual(kv.toJSON(), [
    {key: hash('a'), value: 'a'},
    {key: hash('b'), value: 'b'},
    {key: hash('c'), value: 'c'},
    {key: hash('d'), value: 'd'},
    {key: hash('e'), value: 'e'}
  ].sort(KV.compareKeys))

  t.end()

})


