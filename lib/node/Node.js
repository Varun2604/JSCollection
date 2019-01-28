
class Node{
    constructor(data){
        this.data = data;
    }

    /**
     * Method checks if the given data is equal to this data
     * */
    equals(node){
        let data = node.data;
        if(data === null && this.data === null){
            return true;
        }else if((typeof data === 'object') && (typeof this.data === 'object')){
            //check for every key.
            return (JSON.stringify(data) === JSON.stringify(this.data));
        }else if((typeof data === 'function') && (typeof this.data === 'function')){
            return (data.toString() === this.data.toString());
        }else{
            return (data === this.data);
        }
    }
}

module.exports = {Node};
