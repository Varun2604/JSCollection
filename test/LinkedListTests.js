const assert = require('assert');

const {LinkedList} = require('../lib/collection/LinkedList');
const {LinkedNode} = require('../lib/node/LinkedNode');

const linkedList = new LinkedList();

let LinkedListTests = function() {

    describe('#push()', function() {

        /**
         * positive cases
         * */
        it('size should be 1 when an element is pushed', function() {
            linkedList.push(0);
            assert.equal(linkedList.size, 1);
        });
        it('size should be 2 when another element is pushed', function() {
            linkedList.push(1);
            assert.equal(linkedList.size, 2);
        });

        it('size should be 3 when an element is pushed', function() {
            linkedList.push(2);
            assert.equal(linkedList.size, 3);
        });
        it('checking the index of the second element', function() {
            assert.equal(linkedList.indexOf(1), 1);
        });
        it('contents of the linked list matches', function(){
            assert.equal(linkedList.toArray().toString(), [0,1,2].toString());
        });
        it('trying to push a null element', function() {
            assert(linkedList.push(null) === true);
        });

    });

    describe('#insertAt()', function() {
        /**
         * positive cases
         * */
        it('inserting an element at a valid index', function() {
            linkedList.insertAt(1, 4);
            assert(linkedList.indexOf(4)=== 1);
            assert.equal(linkedList.size, 5);
        });
        it('checking the index of the replaced element', function() {
            assert.equal(linkedList.indexOf(1), 2);
        });

        it('checking insertAt 0', function() {
            linkedList.insertAt(0, 100);
            assert.equal(linkedList.indexOf(100), 0);
            linkedList.shift(0, 100);
        });
        it('contents of the linked list matches', function(){
            assert.equal(linkedList.toArray().toString(), [0,4,1,2,null].toString());
        });

        /**
         *  negative cases
        * */
        it('checking insertAt an index that does not exist', function() {
            assert(linkedList.insertAt(1000, 100) === false);
        });

    });

    describe('#indexOf()', function() {

        /**
         * positive cases
         * */
        it('checking the index of an existing element', function() {
            assert.equal(linkedList.indexOf(4), 1);
        });
        it('checking the index of the third element', function() {
            assert.equal(linkedList.indexOf(2), 3);
        });
        it('checking the index of a null element', function() {
            assert.equal(linkedList.indexOf(null), 4);
        });

        /**
         * negative cases
         * */
        it('checking the index of element that does not exist', function() {
            assert.equal(linkedList.indexOf(100), -1);
        });

    });

    describe('#get()', function() {
        /**
         * checking get at the 0th index
         * */
        it('checking get at 0th index', function() {
            assert.equal(linkedList.get(0), 0);
        });
        /**
         * checking get at the 2nd index
         * */
        it('checking get at nth index', function() {
            assert.equal(linkedList.get(2), 1);
        });
        /**
         * checking get at the last index
         * */
        it('checking get at the last index', function() {
            assert.equal(linkedList.get(linkedList.size-1), null);
            assert.equal(linkedList.get(linkedList.size-2), 2);
        });
        /**
         * checking the index of the null element
         * */
        it('checking the index of the null element', function() {
            assert.equal(linkedList.get(4), null);
        });
        /**
         * checking get at an index that does not exist
         * */
        it('checking get at an index that does not exist', function() {
            assert(linkedList.get(21) === undefined);
        });
        /**
         * checking get at a negative index
         * */
        it('checking get at a negative index', function() {
            // assert.equal(linkedList.get(-21), null);
            assert(linkedList.get(-21) === undefined);
        });
        /**
         * checking get at null
         * */
        it('checking get at null', function() {
            // assert.equal(linkedList.get(-21), null);
            assert(linkedList.get(null) === undefined);
        });
    });

    describe('#contains()', function() {
        /**
         * positive cases
         * */
        it('checking contains on an element exists', function() {
            assert(linkedList.contains(4) === true);
        });
        it('checking contains on an element exists', function() {
            assert(linkedList.contains(1) === true);
        });
        it('checking contains for null', function() {
            assert(linkedList.contains(null) === true);
        });

        /**
         * negative cases
         * */
        it('checking the index of a null element', function() {
            assert(linkedList.contains(104) === false);
        });

    });

    describe('#lastIndexOf()', function() {
        /**
         * positive cases
         * */
        it('checking last index of an element that exists only once', function() {
            assert(linkedList.lastIndexOf(4) === 1);
        });
        it('checking last index of null element when it exists only once', function() {
            assert(linkedList.lastIndexOf(null) === 4);
        });
        it('checking last index of an element that exists twice', function() {
            linkedList.push(4);
            assert(linkedList.lastIndexOf(4) === 5);
        });

        /**
         * negative cases
         * */
        it('checking the last index of an element that does not exists', function() {
            assert(linkedList.lastIndexOf(154) === -1);
        });
        it('checking the last index of undefined when it does not exists', function() {
            assert(linkedList.lastIndexOf(undefined) === -1);
        });
    });

    describe('#remove()', function() {
        /**
         * positive cases
         * */
        it('trying to remove an element that exists only once', function() {
            linkedList.remove(1);
            assert(linkedList.contains(1) === false);
            assert(linkedList.size === 5);
        });
        it('trying to remove an element that exists twice', function() {
            linkedList.remove(4);
            assert(linkedList.contains(4) === true);
            assert(linkedList.size === 4);
            assert(linkedList.indexOf(4) === 3);
        });
        it('trying to remove the element null', function() {
            linkedList.remove(null);
            assert(linkedList.contains(null) === false);
            assert(linkedList.size === 3);
        });
        /**
         * negative cases
         * */
        it('trying to remove an element that does not exits', function() {
            assert(linkedList.remove(100) === null);
            assert(linkedList.size === 3);
        });
    });

    describe('#removeAt()', function() {
        /**
         * positive cases
         * */
        it('trying to remove at 0', function() {
            assert(linkedList.removeAt(0) === 0);
            assert(linkedList.size === 2);
        });
        it('trying to remove an element at an index that exists', function() {
            assert(linkedList.removeAt(1) === 4);
            assert(linkedList.size === 1);
        });
        /**
         * negative cases
         * */
        it('trying to remove an element that does not exits', function() {
            assert(linkedList.removeAt(100) === null);
            assert(linkedList.size === 1);
        });
        it('trying to remove at null index', function() {
            assert(linkedList.removeAt(null) === null);
            assert(linkedList.size === 1);
        });
    });

    describe('#pop()', function() {
        /**
         * positive cases
         * */
        it('trying to pop an element', function() {
            linkedList.push(3);
            linkedList.push(4);
            assert(linkedList.pop() === 4);
            assert(linkedList.size === 2);
        });
    });

    describe('#shift()', function() {
        /**
         * positive cases
         * */
        it('trying to shift an element', function() {
            assert(linkedList.shift() === 2);
            assert(linkedList.size === 1);
        });
    });

    describe('#peekFirst()', function() {
        /**
         * positive cases
         * */
        it('executing peekFirst', function() {
            assert(linkedList.size === 1);
            assert(linkedList.peekFirst() === 3);
        });

        it('executing peekFirst after inserting an element', function() {
            linkedList.push(4);
            assert(linkedList.size === 2);
            assert(linkedList.peekFirst() === 3);
        });
    });

    describe('#peekLast()', function() {
        /**
         * positive cases
         * */
        it('executing peekLast', function() {
            assert(linkedList.size === 2);
            assert(linkedList.peekLast() === 4);
        });

        it('executing peekLast after inserting an element', function() {
            linkedList.push(5);
            assert(linkedList.size === 3);
            assert(linkedList.peekLast() === 5);
        });
    });

    describe('#concat()', function() {
        /**
         * positive cases
         * */
        it('concating an array of two elements increases the size by 2', function() {
            linkedList.concat([6, new LinkedNode(7)]);
            assert(linkedList.size === 5);
            assert(linkedList.get(0) === 3);
            assert(linkedList.get(4) === 7);
            assert(linkedList.peekLast() === 7);
        });
    });

    describe('#toArray()', function() {
        /**
         * positive cases
         * */
        it('check the result of toArray method', function() {
            assert(linkedList.toArray().toString() === [3,4,5,6,7 ].toString());
        });
        it('check the result of toArray method after inserting a null element', function() {
            linkedList.push(null);
            assert(linkedList.toArray().toString() === [3,4,5,6,7,null].toString());
        });
        it('check the result of toArray method after inserting a duplicate element', function() {
            linkedList.push(5);
            assert(linkedList.toArray().toString() === [3,4,5,6,7,null,5].toString());
        });
        it('check the result of toArray method after inserting an element at 0th index', function() {
            linkedList.insertAt(0, 1);
            assert(linkedList.toArray().toString() === [1,3,4,5,6,7,null,5].toString());
        });
    });

    describe('checking for..of loop', function() {
        /**
         * positive cases
         * */
        it('for...of loop returns the elements in the same fashion as toArray', function() {
            let arr = [];
            for(let x of linkedList){
                arr.push(x);
            }
            assert(linkedList.toArray().toString() === arr.toString());
        });
    });
};

module.exports = {LinkedListTests};
