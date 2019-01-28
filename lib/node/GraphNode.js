const {Node} = require('./Node');
const md5 = require('md5');

class GraphNode extends Node{

    /**
     * @param data the node data
     * @param adjacents the left node
     * */
    constructor(data, adjacents = null){
        super(data);
        this.adjacents = [];
        if(adjacents){
            for(let adjacent of adjacents){
                this.addAdjacent(adjacent);
            }
        }
    }

    addAdjacent(adjacent){
        if(!(adjacent instanceof GraphNode)){
            adjacent = new GraphNode(adjacent);
        }
        this.adjacents.push(adjacent);
    }

    hash(){
        return md5(JSON.stringify(this.data));
    }

}

module.exports = {GraphNode};

