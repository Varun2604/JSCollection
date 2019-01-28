const {LinkedNode} = require('../node/LinkedNode');
const {NodedCollection} = require('./NodedCollection');

class LinkedList extends NodedCollection{

    /**
     * @param root The root element
     * */
    constructor(root=null){
        super(root);
        this.size = root?1:0;
    }

    /**
     * Method pushes the given element in the Linked List
     * @param new_ele The new element
     * @return boolean true, if the push is successful, else false
     * */
    push(new_ele){
        if(!(new_ele instanceof LinkedNode)){
            new_ele = new LinkedNode(new_ele);
        }
        let inserted = false;
        if(!this.root){
            this.root = new_ele;
            inserted =  true;
        }else{
            inserted =  this.__insert(new_ele);
        }
        if(inserted){
            this.size++;
        }
        return inserted;
    }

    /**
     * Method lets you insert an element at the given index
     * @param index The index at which the new element is to be inserted
     * @param new_ele The new element
     * @return boolean true, if the push is successful, else false
     * */
    insertAt(index, new_ele){
        if(!(new_ele instanceof LinkedNode)){
            new_ele = new LinkedNode(new_ele);
        }
        let inserted = false;
        if(!this.root){
            if(index === 0){
                this.root = new_ele;
                inserted =  true;
            }else{
                return false;
            }
        }else{
            inserted =  this.__insert(new_ele, index);
        }
        if(inserted){
            this.size++;
        }
        return inserted;
    }

    /**
     * Method gets the element at the given index.
     * @param index the index
     * @return Object The object at the given index
     * */
    get(index){
        let idx = 0;
        let node = null;
        this.__traverseAndBreak(n=>{
            node = n;
            return (idx++ !== index);
        });
        return ((idx-1)===index && node)?node.data:null;
    }

    /**
     * Method checks if the List contains the method passed as the argument
     * @param ele The element to be checked
     * @return boolean true, if the element is present in the list, else false.
     * */
    contains(ele){
        if(!(ele instanceof LinkedNode)){
            ele = new LinkedNode(ele);
        }
        return (this.indexOf(ele)!==-1);
    }

    /**
     * Method returns the first index of the given element in the list, else returns -1
     * @param ele The element whose index in the list is to be checked
     * @return int the first index of the element in the list
     * */
    indexOf(ele){
        let index = -1;
        if(!(ele instanceof LinkedNode)){
            ele = new LinkedNode(ele);
        }
        this.__traverseAndBreak((node, idx)=>{
            if (ele.dataEquals(node)){
                index = idx;
            }
            return (index === -1);
        });
        return index;
    }

    /**
     * Method returns the last index of the given element in the list, else returns -1
     * @param ele The element whose last index in the list is to be checked
     * @return int the last index of the element in the list
     * */
    lastIndexOf(ele){
        let index = -1;
        if(!(ele instanceof LinkedNode)){
            ele = new LinkedNode(ele);
        }
        this.__traverse((node, idx)=>{
            if (ele.dataEquals(node)){
                index = idx;
            }
            return (index === -1);
        });
        return index;
    }

    /**
     * Method removes the first occurrence of the given element from the list
     * @param ele The element which is to be removed from the list
     * @return Object The object that is removed, or null
     * */
    remove(ele){
        if(!(ele instanceof LinkedNode)){
            ele = new LinkedNode(ele);
        }
        if(this.root.dataEquals(ele)){
            let temp = this.root.data;
            this.root = this.root.next;
            return temp;
        }
        let curr = null;
        let prev = null;
        this.__traverseAndBreak((n, idx)=>{
            prev = curr;
            curr = n;
            return !curr.dataEquals(ele);
        });
        if(prev !== null && curr !== null){
            let temp = curr.data;
            prev.next = curr.next;
            return temp;
        }
        return null;
    }

    /**
     * Method removes the element from the list at the given index
     * @param index The index at which the element is to be removed
     * @return Object The object that is removed, or null
     * */
    removeAt(index=0){
        return this.__deleteAt((index - 1));
    }

    /**
     * Method removes the element at the end of the list
     * @return Object the removed element
     * */
    pop(){
        return this.__deleteAt((this.size-1));
    }

    /**
     * Method removes the element at the start of the list
     * @return Object the removed element
     * */
    shift(){
        return this.__deleteAt(0);
    }

    /**
     * Method retrieves, but does not remove, the first element of this list, or returns null if this list is empty
     * @return Object first element in the list
     * */
    peekFirst(){
        return this.root.data;
    }

    /**
     * Method retrieves, but does not remove, the last element of this list, or returns null if this list is empty
     * (Implemented using Floyd's )
     * @return Object last element in the list
     * */
    peekLast(){
        let node = null;
        this.__traverse(n => node = n);
        return node.data;
    }

    /**
     * Method merges the given array with the list.
     * @param array the array to be merged
     * */
    concat(array = []){
        for(let e of array){
            e = new LinkedNode(e);
            this.push(e);
        }
    }

    /**
     * Method returns the contents of the list as an array
     * @return Array the contents of the list
     * */
    toArray(){
        let arr = [];
        this.__traverse(node=>{
            arr.push(node.data);
        });
        return arr;
    }

    //method traverses through every element in the list with the given consumer
    __traverse(consumer, node=this.root){
        if(!node){
            return;
        }
        let idx = 0;
        while(node){
            consumer(node, idx++);
            node = node.next;
        }
    }

    //method traverses through every element in the list with the given predicate, and breaks if the predicate return false
    __traverseAndBreak(predicate_consumer, node=this.root){
        if(!node){
            return;
        }
        let idx = 0;
        while(node && predicate_consumer(node, idx++)){
            node = node.next;
        }
    }

    //method inserts the given element at the given index
    __insert(new_ele, index=this.size){
        let idx = 0;
        let node = this.root;
        while(node && (++idx<index)){
            node = node.next;
        }
        if(idx === index){
            new_ele.next = node.next;
            node.next = new_ele;
            return true;
        }
        return false;
    }

    __deleteAt(index){
        if(index === 0){
            let temp = this.root.data;
            this.root = this.root.next;
            return temp;
        }
        --index;
        let prev_node = this.root;
        let curr_node = this.root.next;
        this.__traverseAndBreak((node, idx)=>{
            prev_node = node;
            curr_node = node.next;
            return (index === idx);
        });
        if(prev_node && curr_node){
            let temp = curr_node.data;
            prev_node.next = curr_node.next;
            return temp;
        }
        return null;
    }


}

module.exports = {LinkedList};
