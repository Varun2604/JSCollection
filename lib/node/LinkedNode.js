const {Node} = require('./Node');

class LinkedNode extends Node{

    /**
     * @param data the node data
     * @param next the left node
     * */
    constructor(data, next = null){
        super(data);
        this.next = next;
    }

}

module.exports = {LinkedNode};

