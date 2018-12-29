const {TreeNode} = require('./TreeNode');
const {TreeList} = require('./TreeList');

class TreeSet extends TreeList{

    /**
     * Method appends a new element to the list
     * @param new_ele the new element to be inserted in the list
     * @return boolean returns true if the insertion is successful
     * */
    push(new_ele){
        if(!(new_ele instanceof TreeNode)){
            new_ele = new TreeNode(new_ele);
        }
        let inserted = false;
        if(!this.root){
            this.root = new_ele;
            inserted =  true;
        }else{
            inserted =  this.__insert(new_ele, this.root);
        }
        if(inserted){
            this.size++;
        }
        return inserted;
    }

    /**
     * Method returns the last index of the given element, or -1 if the element is not present.
     * @return int the last index of the given element
     * */
    lastIndexOf(ele){
        return this.indexOf(ele);
    }

    __insert(new_ele, prev_ele){
        if(this.comparator(prev_ele, new_ele) < 0){
            if(prev_ele.left === null){
                prev_ele.left = new_ele;
                return true;
            }else{
                return this.__insert(new_ele, prev_ele.left);
            }
        }else if(this.comparator(prev_ele, new_ele) > 0){
            if(prev_ele.right === null){
                prev_ele.right = new_ele;
                return true;
            }else{
                return this.__insert(new_ele, prev_ele.right);
            }
        }else{
            return false;
        }
    }

}

module.exports = {TreeSet};
