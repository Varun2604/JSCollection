const assert = require('assert');

const {LinkedList} = require('../LinkedList');

const linkedList = new LinkedList();

let LinkedListTests = function() {

    describe('#push()', function() {

        /**
         * Pushing data into the linked list.
         * */

        it('size should be 1 when an element is pushed', function() {
            linkedList.push(0);
            assert.equal(linkedList.size, 1);
        });
        it('size should be 2 when another element is pushed', function() {
            linkedList.push(1);
            assert.equal(linkedList.size, 2);
        });

        /**
         * Pushing 3rd data into the linked list.
         * */
        it('size should be 3 when an element is pushed', function() {
            linkedList.push(2);
            assert.equal(linkedList.size, 3);
        });

        /**
         * checking the indexOf the second element
         * */
        it('checking the index of the second element', function() {
            assert.equal(linkedList.indexOf(1), 1);
        });

        /**
         * checking the contents of the array
         * */
        it('contents of the linked list matches', function(){
            assert.equal(linkedList.toArray().toString(), [0,1,2].toString());
        });

    });

    describe('#insertAt()', function() {
        /**
         * inserting the element at second position
         * */
        it('size of the list should be 4 when an element is inserted', function() {
            linkedList.insertAt(1, 4);
            assert.equal(linkedList.size, 4);
        });

        /**
         * checking the indexOf the second element
         * */
        it('checking the index of the newly inserted element', function() {
            assert.equal(linkedList.indexOf(4), 1);
        });

        /**
         * checking the indexOf the third element
         * */
        it('checking the index of the replaced element', function() {
            assert.equal(linkedList.indexOf(1), 2);
        });

        /**
         * checking the contents of the array
         * */
        it('contents of the linked list matches', function(){
            assert.equal(linkedList.toArray().toString(), [0,4,1,2].toString());
        });

    });

    describe('#indexOf()', function() {
        /**
         * checking the indexOf the second element
         * */
        it('checking the index of the second element', function() {
            assert.equal(linkedList.indexOf(4), 1);
        });
        /**
         * checking the indexOf the third element
         * */
        it('checking the index of the third element', function() {
            assert.equal(linkedList.indexOf(2), 3);
        });
        /**
         * checking indexOf an element that does not exist
         * */
        it('checking the index of the third element', function() {
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
        it('checking get at 0th index', function() {
            assert.equal(linkedList.get(2), 1);
        });
        /**
         * checking get at the last index
         * */
        it('checking get at the last index', function() {
            assert.equal(linkedList.get(linkedList.size-1), 2);
        });
        /**
         * checking get at an index that does not exist
         * */
        it('checking get at an index that does not exist', function() {
            console.log(linkedList.get(21));
            assert.equal(linkedList.get(21), null);
        });
    });

};

module.exports = {LinkedListTests};
