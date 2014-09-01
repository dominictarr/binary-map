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

### BinaryMay#set(key, value)

set a key to a value

### BinaryMay#get(key)

return the value for key, or undefined

### BinaryMay#has(key)

return true if `key` is stored.

### i = BinaryMay#getIndex(key)

return the index key is stored at in the internal array.
If return value is negative, key is not in the array.
Since `binary-map` wraps [binary-search](https://github.com/darkskyapp/binary-search)
`~i` will be the value of the closest key
(the item currently where this key would be if it was in the map)

### BinaryMap#store

The internal array. Realize that if you mutate this
you might break stuff if you do not preserve
the order of the keys.

### BinaryMap#toJSON

Return a copy of the internal array.
This does not clone the keys or values,
so if you mutate something it could break.


## License

MIT
