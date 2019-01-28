const {GraphNode} = require('../node/GraphNode');
const {NodedCollection} = require('./NodedCollection');

class Graph extends NodedCollection{

    constructor(){
        super();
        this.graph_map = {};
    }

    /**
     * @description create an edge between two vertices, by default creates a directed edge
     * @param src The source vertex of the edge
     * @param dest The destination vertex of the edge
     * @param is_directed true, if the edge is directed
     * @return null
     * */
    createEdge(src, dest, is_directed = true){
        if(!(src instanceof GraphNode)){
            src = new GraphNode(src);
        }
        this.__createEdge__(src, dest);
        if(!is_directed){
            if(!(dest instanceof GraphNode)){
                dest = new GraphNode(dest);
            }
            this.__createEdge__(dest, src);
        }
    }

    __createEdge__(src_vertex, dest_vertex){
        if(!this.graph_map.hasOwnProperty(src_vertex.hash())){
            this.graph_map[src_vertex.hash()] = src_vertex;
        }
        this.graph_map[src_vertex.hash()].addAdjacent(dest_vertex);
    }
}

module.exports = {Graph};