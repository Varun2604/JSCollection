const {TreeNode} = require('./TreeNode');

class TreeList{

    /**
     * @param comparator the comparator function
     * @param root the root element
     * Comparator working :-
     *                    1. The comparator returns -1 if the new node is lesser than the previous node
     *                    2. The comparator returns 0 if the new node is equal to the previous node
     *                    3. The comparator returns 1 if the new node is greater than the previous node
     * */
    constructor(comparator=TreeList.comparator, root=null){
        this.comparator = comparator;
        this.root = root;
        this.size = 0;
        this[Symbol.iterator] = function* (){
            let arr = [];
            console.log('calling traverse');
            this.__traverse(this.root, (x)=>{
                arr.push(x.data);
            });
            for(let i = 0; i < arr.length; i++){
                yield arr[i];
            }
        }
    }

    /**
     * Method appends a new element to the list
     * @param new_ele the new element to be inserted in the list
     * @return boolean returns true if the insertion is successful
     * */
    push(new_ele){
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
     * Removes the given element from the list
     * @param ele The TreeNode that is to be removed
     * @return TreeNode the removed element
     * */
    remove(ele){
        if(!this.root){
            return null;
        }
        this.size--;
        this.__delete(ele, this.root);
	    return ele.data;
    }

    /**
     * Method removes the element at the end of the list
     * @return TreeNode the removed element
     * */
    pop(){
        let last_val = TreeList.__leftMost(this.root);
        this.__delete(new TreeNode(last_val), this.root);
        this.size--;
        return last_val;
    }

    /**
     * Method removes the element at the start of the list
     * @return TreeNode the removed element
     * */
    shift(){
        let temp = this.root.data;
        this.root = this.__delete(this.root, this.root);
        this.size--;
        return temp;
    }

    /**
     * Method checks if the element is in the list
     * @return boolean true, if the element is present in the list
     * */
    contains(ele){
        return (this.indexOf(ele)>-1);
    }

    /**
     * Method returns the index of the given element, or -1 if the element is not present.
     * @return int the index of the given element
     * */
    indexOf(ele){
        let idx = -1;
        this.__traverse(this.root, (node)=>{if(!(this.comparator(node, ele) < 0)){idx++}});
        return ++idx;
    }

    /**
     * Method returns the last index of the given element, or -1 if the element is not present.
     * @return int the last index of the given element
     * */
    lastIndexOf(ele){
        let idx = -1;
        this.__traverse(this.root, (node)=>{if(!(this.comparator(node, ele) <= 0)){idx++}});
        return ++idx;
    }

    /**
     * Method iterates through each of the element present in the list, with the give consumer function
     * @param consumer function that iterates through each of the element in the list
     * */
    forEach(consumer){
        this.__traverse(this.root, consumer);
    }

    /**
     * Method creates and returns a new string by concatenating all of the elements in an array
     * @param delimiter the delimiter for joining the elements in the string
     * @return String a string with all elements joined with the delimiter
     * */
    join(delimiter = ','){
        let str = '';
        this.__traverse(this.root, (node)=>{str += (node.data+delimiter)});
        return str.substr(0, (str.length-delimiter.length));
    }

    /**
     * Method takes in a predicate function, and returns a filtered array.
     * @param predicate the predicate function, should return true if the element is to be present in the new array
     * @return Array an array with all the elements that are accepted by the predicate
     * */
    filter(predicate){
        let arr = [];
        this.__traverse(this.root, node=>{if(predicate(node.data)){ arr.push(node.data);}});
        return arr;
    }

    /**
     * Method takes in a consumer function, and returns an array consisting of the results of applying the given function to the elements of the list.
     * @param consumer the consumer function, that returns the new value of the node data
     * @return Array an array with all the new elements values
     * */
    map(consumer){
        let arr = [];
        this.__traverse(this.root, node=>{arr.push(consumer(node.data));});
        return arr;
    }

    /**
     * Method returns the contents of the list as an array
     * @return Array the contents of the list
     * */
    toArray(){
        let arr = [];
        this.__traverse(this.root, (node)=>{arr.push(node.data);});
        return arr;
    }

    //method does inorder traversal on the tree
    //node is the start node, from where traversing is to begin.
    //TODO this works ? No need to use promises ?
    __traverse(node, consumer){
        if(node === null){
            return;
        }
        if(node.left){
            this.__traverse(node.left, consumer);
        }
        consumer(node);
        if(node.right){
            this.__traverse(node.right, consumer);
        }
    }

    //method does inorder traversal on the tree
    //node is the start node, from where traversing is to begin.
    //predicate_consumer is the consumer, and returns false if the traversing is to be stopped.
    //TODO this works ? No need to use promises ?
    //TODO check for bugs in this method.
    __traverseAndBreak(node, predicate_consumer){
        if(node === null){
            return;
        }
        if(node.left){
            this.__traverse(node.left, predicate_consumer);
        }
        if(!predicate_consumer(node)){
		return;
	}
        if(node.right){
            this.__traverse(node.right, predicate_consumer);
        }
    }


    __delete(ele, current_node){


        if(this.comparator(ele, current_node) === 0){            //the current node is the node to be deleted

            if(current_node === null){
                return null;
            }

            //case with only left child
            if(current_node.right === null){
                return current_node.left;
            }

            //case with only right child
            if(current_node.left === null){
                return current_node.right;
            }

            //case with both children.
            current_node.data = TreeList.__leftMost(current_node.right);            //find the leftmost value to the right node of the current node

            current_node.right = this.__delete(current_node, current_node.right);

        }else{
            if(this.comparator(current_node, ele) < 0){
                current_node.left =  this.__delete(ele, current_node.left);
            }else{
                current_node.right = this.__delete(ele, current_node.right);
            }
        }

        return current_node;        //return the node that replaced the given node.
    }

    static __leftMost(node){
        let left_most_val = node.data;
        while(node.left){
            left_most_val = node.left.data;
            node = node.left;
        }
        return left_most_val;
    }

    __insert(new_ele, prev_ele){
        if(this.comparator(prev_ele, new_ele) <= 0){
            if(prev_ele.left === null){
                prev_ele.left = new_ele;
                return true;
            }else{
                return this.__insert(new_ele, prev_ele.left);
            }
        }else{
            if(prev_ele.right === null){
                prev_ele.right = new_ele;
                return true;
            }else{
                return this.__insert(new_ele, prev_ele.right);
            }
        }
    }

    static comparator(prev_ele, new_ele){
        if(prev_ele instanceof TreeNode){
            prev_ele = prev_ele.data;
        }
        if(new_ele instanceof TreeNode){
            new_ele = new_ele.data;
        }
        return (prev_ele>new_ele)?-1:+(prev_ele<new_ele)
    }

}

module.exports = {TreeList};

// (()=>{
//     var {TreeList} = require('./TreeList');
// var {TreeNode} = require('./TreeNode');
// var t = new TreeList()
// t.push(new TreeNode(1))
// t.push(new TreeNode(0))
// t.push(new TreeNode(2))
// t.push(new TreeNode(1.5))
// t.push(new TreeNode(3))
// t.push(new TreeNode(2.5))
// t.push(new TreeNode(4))
// })();


