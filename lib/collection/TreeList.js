const {TreeNode} = require('../node/TreeNode');
const {NodedCollection} = require('./NodedCollection');

//TODO use recurssion to get the reverse list!!
class TreeList extends NodedCollection{

    /**
     * @param comparator the comparator function
     * @param root the root element
     * Comparator working :-
     *                    1. The comparator returns -1 if the new node is lesser than the previous node
     *                    2. The comparator returns 0 if the new node is equal to the previous node
     *                    3. The comparator returns 1 if the new node is greater than the previous node
     * */
    constructor(comparator=TreeList.comparator, root=null){
        super(root);
        this.comparator = comparator;
        this.size = root?1:0;
    }

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
     * Removes the given element from the list
     * @param ele The TreeNode that is to be removed
     * @return TreeNode the removed element
     * */
    remove(ele){
        if(!(ele instanceof TreeNode)){
            ele = new TreeNode(ele);
        }
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
        let last_val = TreeList.leftMost(this.root);
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
     * Method retrieves the element at the given index, or undefined if there is no element at the given index.
     * @param index the index at which the element is to be found
     * @return Object the data at the index
     * */
    get(index){
        let data = undefined;
        if(index < this.size){
            let idx = 0;
            this.__traverseAndBreak((node)=>{
                if(idx++ === index){
                    data = node.data;
                    return false;
                }
                return true;
            });
        }
        return data;
    }

    /**
     * Method checks if the element is in the list
     * @return boolean true, if the element is present in the list
     * */
    contains(ele){
        if(!(ele instanceof TreeNode)){
            ele = new TreeNode(ele);
        }
        return (this.indexOf(ele)>-1);
    }

    /**
     * Method returns the index of the given element, or -1 if the element is not present.
     * @return int the index of the given element
     * */
    indexOf(ele){
        if(!(ele instanceof TreeNode)){
            ele = new TreeNode(ele);
        }
        let idx = -1;
        let found = false;
        this.__traverseAndBreak((node)=>{
            ++idx;
            if(TreeList.comparator(ele, node) < 0){
                return true;
            }else if(TreeList.comparator(ele, node) === 0){
                found = true;
                return false;
            }
            return false;
        });
        return found?idx:-1;
    }

    /**
     * Method returns the last index of the given element, or -1 if the element is not present.
     * @return int the last index of the given element
     * */
    lastIndexOf(ele){
        if(!(ele instanceof TreeNode)){
            ele = new TreeNode(ele);
        }
        let idx = -1;
        this.__traverse((node)=>{if(!(this.comparator(node, ele) <= 0)){idx++}});
        return ++idx;
    }

    /**
     * Method iterates through each of the element present in the list, with the give consumer function
     * @param consumer function that iterates through each of the element in the list
     * */
    forEach(consumer){
        this.__traverse(consumer);
    }

    /**
     * Method creates and returns a new string by concatenating all of the elements in an array
     * @param delimiter the delimiter for joining the elements in the string
     * @return String a string with all elements joined with the delimiter
     * */
    join(delimiter = ','){
        let str = '';
        this.__traverse((node)=>{str += (node.data+delimiter)});
        return str.substr(0, (str.length-delimiter.length));
    }

    /**
     * Method takes in a predicate function, and returns a filtered array.
     * @param predicate the predicate function, should return true if the element is to be present in the new array
     * @return Array an array with all the elements that are accepted by the predicate
     * */
    filter(predicate){
        let arr = [];
        this.__traverse(node=>{if(predicate(node.data)){ arr.push(node.data);}});
        return arr;
    }

    /**
     * Method takes in a consumer function, and returns an array consisting of the results of applying the given function to the elements of the list.
     * @param consumer the consumer function, that returns the new value of the node data
     * @return Array an array with all the new elements values
     * */
    map(consumer){
        let arr = [];
        this.__traverse(node=>{arr.push(consumer(node.data));});
        return arr;
    }

    /**
     * Method returns the contents of the list as an array
     * @return Array the contents of the list
     * */
    toArray(){
        let arr = [];
        this.__traverse((node)=>{arr.push(node.data);});
        return arr;
    }

    /**
     * The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
     * @param reducer the reducer function
     * @param initial_value the initial value
     * @return Object the final value
     * */
    reduce(reducer, initial_value){
        if(!initial_value){
            initial_value = 0;
        }
        let accumulator = initial_value;
        let idx = 0;
        this.__traverse((node)=>{
            accumulator = reducer(accumulator, node.data, ++idx, this);
        });
        return accumulator;
    }

    /**
     * The every() method tests whether all elements in the array pass the test implemented by the provided function.
     * @param callback the callback
     * @return boolean true if all elements pass the test
     * */
    every(callback){
        let test = true;
        this.__traverseAndBreak((node)=>{
            test = callback(node.data);
            return test;
        });
        return test;
    }

    /**
     * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
     * @param callback the callback
     * @return boolean true if all elements pass the test
     * */
    some(callback){
        let test = false;
        this.__traverseAndBreak((node)=>{
            test = callback(node.data);
            return !test;
        });
        return test;
    }

    /**
     * The find() method returns the value of the first element in the array that satisfies the provided testing function.
     * @param callback the callback
     * @return Object the element if found, else undefined
     * */
    find(callback){
        let ret = undefined;
        this.__traverseAndBreak((node)=>{
            if(callback(node.data)){
                ret = node.data;
                return false;
            }
            return true;
        });
        return ret;
    }

    /**
     * Method merges the given array with the list.
     * @param array the array to be merged
     * */
    concat(array){
        for(let x of array){
            this.push(x);
        }
    }

    //method does inorder traversal on the tree
    //node is the start node, from where traversing is to begin.
    __traverse(consumer, node=this.root){
        if(node === null){
            return;
        }
        if(node.left){
            this.__traverse(consumer, node.left);
        }
        consumer(node);
        if(node.right){
            this.__traverse(consumer, node.right);
        }
    }

    //method does inorder traversal on the tree
    //node is the start node, from where traversing is to begin.
    //predicate_consumer is the consumer, and returns false if the traversing is to be stopped.
    __traverseAndBreak(predicate_consumer, node=this.root){
        if(node === null){
            return;
        }
        if(node.left){
            if(this.__traverseAndBreak(predicate_consumer, node.left) === false){
                return;
            }
        }
        if(!predicate_consumer(node)){
            return false;
        }
        if(node.right){
            if(this.__traverseAndBreak(predicate_consumer, node.right) === false){
                return;
            }
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
            current_node.data = TreeList.leftMost(current_node.right);            //find the leftmost value to the right node of the current node

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

    /**
     * The default comparator, sorts the elements in ascending order
     * @static
     * @param curr_ele the previous element
     * @param new_ele current element
     * @return int returns +1 if the new element is to be placed right to the current element,
     *              -1 if the new element is to be placed to the left of the current element
     *              and 0 if the elements are equal.
     * */
    static comparator(curr_ele, new_ele){
        if(curr_ele instanceof TreeNode){
            curr_ele = curr_ele.data;
        }
        if(new_ele instanceof TreeNode){
            new_ele = new_ele.data;
        }
        return (curr_ele>new_ele)?-1:+(curr_ele<new_ele)
    }

    /**
     * Method returns the left most node with reference to the current node.
     * @static
     * @param node the node with reference to which the current node is to be found out.
     * */
    static leftMost(node){
        let left_most_val = node.data;
        while(node.left){
            left_most_val = node.left.data;
            node = node.left;
        }
        return left_most_val;
    }
}

module.exports = {TreeList};

// (()=>{
//     var {TreeList} = require('./TreeList');
//     var {TreeNode} = require('./TreeNode');
//     var t = new TreeList()
//     t.push(new TreeNode(1))
//     t.push(new TreeNode(0))
//     t.push(new TreeNode(2))
//     t.push(new TreeNode(1.5))
//     t.push(new TreeNode(3))
//     t.push(new TreeNode(2.5))
//     t.push(new TreeNode(4))
//     // t.__traverseAndBreak(t.root, (x)=>{console.log(x.data); if(x.data === 2){return false;}else{return true}});
//     t.indexOf(1);
// })();


