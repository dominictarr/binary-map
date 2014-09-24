# binary-map

In-memory key/value store based on a binary search, that supports buffers as keys.

## example

``` js
var BinaryMap = require('binary-map')

var bm = BinaryMap()

bm.set(key, value)
value = bm.get(key)
```

## API

### bm = BinaryMap(comparator?)

create a new `binary-map` instance with the given comparator.
By default [typewiselite](https://github.com/dominictarr/typewiselite) is used,
which should be sufficent for most purposes.

### BinaryMap#set(key, value)

set a key to a value

### BinaryMap#add({key, value})

Like set, except add a pair of values.
The object passed in will be used in the external datastructure,
so do not mutate it after calling this.

### BinaryMap#get(key)

return the value for key, or undefined

### BinaryMap#has(key)

return true if `key` is stored.

### i = BinaryMap#getIndex(key)

return the index key is stored at in the internal array.
If return value is negative, key is not in the array.
Since `binary-map` wraps [binary-search](https://github.com/darkskyapp/binary-search)
`~i` will be the value of the closest key
(the item currently where this key would be if it was in the map)

### BinaryMap#store

The internal array. Realize that if you mutate this
you might break stuff if you do not preserve
the order of the keys.

### BinaryMap#toJSON()

Return a copy of the internal array.
This does not clone the keys or values,
so if you mutate something it could break.


## License

MIT
