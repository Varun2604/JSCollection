
class NodedCollection{

    constructor(root=null){
        this.root = root;
        this[Symbol.iterator] = function* (){
            let arr = [];
            this.__traverse((x)=>{
                arr.push(x.data);
            });
            for(let i = 0; i < arr.length; i++){
                yield arr[i];
            }
        }
    }

    __traverse(consumer, start_element){
        throw new Error("Collection needs to implement __traverse. Please raise an issue at https://github.com/Varun2604/JSCollection/issues");
    }

}

module.exports = {NodedCollection};
