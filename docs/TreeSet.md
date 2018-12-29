<a name="TreeSet"></a>

## TreeSet
**Kind**: global class  

* [TreeSet](#TreeSet)
    * [new TreeSet(comparator, root)](#new_TreeSet_new)
    * _instance_
        * [.push(new_ele)](#TreeSet+push) ⇒
        * [.remove(ele)](#TreeSet+remove) ⇒
        * [.pop()](#TreeSet+pop) ⇒
        * [.shift()](#TreeSet+shift) ⇒
        * [.contains()](#TreeSet+contains) ⇒
        * [.indexOf()](#TreeSet+indexOf) ⇒
        * [.forEach(consumer)](#TreeSet+forEach)
        * [.join(delimiter)](#TreeSet+join) ⇒
        * [.filter(predicate)](#TreeSet+filter) ⇒
        * [.map(consumer)](#TreeSet+map) ⇒
        * [.toArray()](#TreeSet+toArray) ⇒
        * [.reduce(reducer, initial_value)](#TreeSet+reduce) ⇒
        * [.every(callback)](#TreeSet+every) ⇒
        * [.some(callback)](#TreeSet+some) ⇒
        * [.find(callback)](#TreeSet+find) ⇒
        * [.concat(array)](#TreeSet+concat)
    * _static_
        * [.comparator(curr_ele, new_ele)](#TreeSet.comparator) ⇒
        * [.leftMost(node)](#TreeSet.leftMost)

<a name="new_TreeSet_new"></a>

### new TreeSet(comparator, root)

| Param | Default | Description |
| --- | --- | --- |
| comparator |  | the comparator function |
| root | <code></code> | the root element Comparator working :- <code>               1. The comparator returns -1 if the new node is lesser than the previous node                2. The comparator returns 0 if the new node is equal to the previous node                3. The comparator returns 1 if the new node is greater than the previous node</code>|

<a name="TreeSet+push"></a>

### treeSet.push(new_ele) ⇒
Method appends a new element to the list

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: boolean returns true if the insertion is successful  

| Param | Description |
| --- | --- |
| new_ele | the new element to be inserted in the list |

<a name="TreeSet+remove"></a>

### treeSet.remove(ele) ⇒
Removes the given element from the list

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: TreeNode the removed element  

| Param | Description |
| --- | --- |
| ele | The TreeNode that is to be removed |

<a name="TreeSet+pop"></a>

### treeSet.pop() ⇒
Method removes the element at the end of the list

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: TreeNode the removed element  
<a name="TreeSet+shift"></a>

### treeSet.shift() ⇒
Method removes the element at the start of the list

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: TreeNode the removed element  
<a name="TreeSet+contains"></a>

### treeSet.contains() ⇒
Method checks if the element is in the list

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: boolean true, if the element is present in the list  
<a name="TreeSet+indexOf"></a>

### treeSet.indexOf() ⇒
Method returns the index of the given element, or -1 if the element is not present.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: int the index of the given element  
<a name="TreeSet+forEach"></a>

### treeSet.forEach(consumer)
Method iterates through each of the element present in the list, with the give consumer function

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  

| Param | Description |
| --- | --- |
| consumer | function that iterates through each of the element in the list |

<a name="TreeSet+join"></a>

### treeSet.join(delimiter) ⇒
Method creates and returns a new string by concatenating all of the elements in an array

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: String a string with all elements joined with the delimiter  

| Param | Default | Description |
| --- | --- | --- |
| delimiter | <code>,</code> | the delimiter for joining the elements in the string |

<a name="TreeSet+filter"></a>

### treeSet.filter(predicate) ⇒
Method takes in a predicate function, and returns a filtered array.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: Array an array with all the elements that are accepted by the predicate  

| Param | Description |
| --- | --- |
| predicate | the predicate function, should return true if the element is to be present in the new array |

<a name="TreeSet+map"></a>

### treeSet.map(consumer) ⇒
Method takes in a consumer function, and returns an array consisting of the results of applying the given function to the elements of the list.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: Array an array with all the new elements values  

| Param | Description |
| --- | --- |
| consumer | the consumer function, that returns the new value of the node data |

<a name="TreeSet+toArray"></a>

### treeSet.toArray() ⇒
Method returns the contents of the list as an array

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: Array the contents of the list  
<a name="TreeSet+reduce"></a>

### treeSet.reduce(reducer, initial_value) ⇒
The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: Object the final value  

| Param | Description |
| --- | --- |
| reducer | the reducer function |
| initial_value | the initial value |

<a name="TreeSet+every"></a>

### treeSet.every(callback) ⇒
The every() method tests whether all elements in the array pass the test implemented by the provided function.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: boolean true if all elements pass the test  

| Param | Description |
| --- | --- |
| callback | the callback |

<a name="TreeSet+some"></a>

### treeSet.some(callback) ⇒
The some() method tests whether at least one element in the array passes the test implemented by the provided function.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: boolean true if all elements pass the test  

| Param | Description |
| --- | --- |
| callback | the callback |

<a name="TreeSet+find"></a>

### treeSet.find(callback) ⇒
The find() method returns the value of the first element in the array that satisfies the provided testing function.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: Object the element if found, else undefined  

| Param | Description |
| --- | --- |
| callback | the callback |

<a name="TreeSet+concat"></a>

### treeSet.concat(array)
Method merges the given array with the list.

**Kind**: instance method of [<code>TreeSet</code>](#TreeSet)  

| Param | Description |
| --- | --- |
| array | the array to be merged |

<a name="TreeSet.comparator"></a>

### TreeSet.comparator(curr_ele, new_ele) ⇒
The default comparator, sorts the elements in ascending order

**Kind**: static method of [<code>TreeSet</code>](#TreeSet)  
**Returns**: int returns +1 if the new element is to be placed right to the current element,
             -1 if the new element is to be placed to the left of the current element
             and 0 if the elements are equal.  

| Param | Description |
| --- | --- |
| curr_ele | the previous element |
| new_ele | current element |

<a name="TreeSet.leftMost"></a>

### TreeSet.leftMost(node)
Method returns the left most node with reference to the current node.

**Kind**: static method of [<code>TreeSet</code>](#TreeSet)  

| Param | Description |
| --- | --- |
| node | the node with reference to which the current node is to be found out. |
