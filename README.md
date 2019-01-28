# JSCollection
##### Simple collection classes that can be used in JS/Node.

Native JS provides very less provision for Data Structures, unlike Java.
Use data-collection.js to harness the potential of various Data Structures.

## Getting Started

data-collection.js is bundled as an npm package, simply install it with the following command.
```
npm i data-collection --save
```

## Using a Collection class

Below is the demo for using a Collection class from data-collection.js

1. Include the package.
   ```
   const {LinkedList} = require('data-collection.js');
   ```
   
2. Create a new Instance of Collection class.
   ```
   let linkedList = new LinkedList();
   ```
   
3. Use the methods of the collection class to fiddle with your data.
   ```
   linkedList.push(new ObjectX('object one'));
   linkedList.push(new ObjectX('object two'));
   ```
   ```
   linkedList.get(0);   //ObjectX('object one') 
   ```
   
4. Use the for..of loop on the Collection as if using on normal JavaScript array

    ```
    for(let x of linkedList){
        console.log(x);
    }
    //ObjectX('object one') 
    //ObjectX('object two') 
    ```

## Docs
Find the [docs](https://varun2604.github.io/data-collection.js) of various Collections available with data-collection.js

## Authors

* **Varun Venketeswaran Iyer** - *Initial work* - [Varun2604](https://github.com/Varun2604)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Issues & Suggestions
Please file issues/suggestions in the [issue manager](https://github.com/Varun2604/data-collection.js/issues) .
