class TreeNode{

    /**
     * @param data the node data
     * @param left the left node
     * @param right the right node
     * */
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

}

module.exports = {TreeNode};
