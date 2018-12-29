## Classes

<dl>
<dt>[TreeNode](./docs/TreeNode.md)</dt>
<dd></dd>
<dt><a href="#TreeList">TreeList</a></dt>
<dd></dd>
</dl>

<a name="TreeNode"></a>

## TreeNode
**Kind**: global class  
<a name="new_TreeNode_new"></a>

### new TreeNode(data, left, right)

| Param | Default | Description |
| --- | --- | --- |
| data |  | the node data |
| left | <code></code> | the left node |
| right | <code></code> | the right node |

<a name="TreeList"></a>

## TreeList
**Kind**: global class  

* [TreeList](#TreeList)
    * [new TreeList(comparator, root)](#new_TreeList_new)
    * _instance_
        * [.push(new_ele)](#TreeList+push) ⇒
        * [.remove(ele)](#TreeList+remove) ⇒
        * [.pop()](#TreeList+pop) ⇒
        * [.shift()](#TreeList+shift) ⇒
        * [.contains()](#TreeList+contains) ⇒
        * [.indexOf()](#TreeList+indexOf) ⇒
        * [.lastIndexOf()](#TreeList+lastIndexOf) ⇒
        * [.forEach(consumer)](#TreeList+forEach)
        * [.join(delimiter)](#TreeList+join) ⇒
        * [.filter(predicate)](#TreeList+filter) ⇒
        * [.map(consumer)](#TreeList+map) ⇒
        * [.toArray()](#TreeList+toArray) ⇒
        * [.reduce(reducer, initial_value)](#TreeList+reduce) ⇒
        * [.every(callback)](#TreeList+every) ⇒
        * [.some(callback)](#TreeList+some) ⇒
        * [.find(callback)](#TreeList+find) ⇒
        * [.concat(array)](#TreeList+concat)
    * _static_
        * [.comparator(curr_ele, new_ele)](#TreeList.comparator) ⇒
        * [.leftMost(node)](#TreeList.leftMost)

<a name="new_TreeList_new"></a>

### new TreeList(comparator, root)

| Param | Default | Description |
| --- | --- | --- |
| comparator |  | the comparator function |
| root | <code></code> | the root element Comparator working :- <code>               1. The comparator returns -1 if the new node is lesser than the previous node                2. The comparator returns 0 if the new node is equal to the previous node                3. The comparator returns 1 if the new node is greater than the previous node</code>|

<a name="TreeList+push"></a>

### treeList.push(new_ele) ⇒
Method appends a new element to the list

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: boolean returns true if the insertion is successful  

| Param | Description |
| --- | --- |
| new_ele | the new element to be inserted in the list |

<a name="TreeList+remove"></a>

### treeList.remove(ele) ⇒
Removes the given element from the list

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: TreeNode the removed element  

| Param | Description |
| --- | --- |
| ele | The TreeNode that is to be removed |

<a name="TreeList+pop"></a>

### treeList.pop() ⇒
Method removes the element at the end of the list

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: TreeNode the removed element  
<a name="TreeList+shift"></a>

### treeList.shift() ⇒
Method removes the element at the start of the list

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: TreeNode the removed element  
<a name="TreeList+contains"></a>

### treeList.contains() ⇒
Method checks if the element is in the list

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: boolean true, if the element is present in the list  
<a name="TreeList+indexOf"></a>

### treeList.indexOf() ⇒
Method returns the index of the given element, or -1 if the element is not present.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: int the index of the given element  
<a name="TreeList+lastIndexOf"></a>

### treeList.lastIndexOf() ⇒
Method returns the last index of the given element, or -1 if the element is not present.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: int the last index of the given element  
<a name="TreeList+forEach"></a>

### treeList.forEach(consumer)
Method iterates through each of the element present in the list, with the give consumer function

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  

| Param | Description |
| --- | --- |
| consumer | function that iterates through each of the element in the list |

<a name="TreeList+join"></a>

### treeList.join(delimiter) ⇒
Method creates and returns a new string by concatenating all of the elements in an array

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: String a string with all elements joined with the delimiter  

| Param | Default | Description |
| --- | --- | --- |
| delimiter | <code>,</code> | the delimiter for joining the elements in the string |

<a name="TreeList+filter"></a>

### treeList.filter(predicate) ⇒
Method takes in a predicate function, and returns a filtered array.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: Array an array with all the elements that are accepted by the predicate  

| Param | Description |
| --- | --- |
| predicate | the predicate function, should return true if the element is to be present in the new array |

<a name="TreeList+map"></a>

### treeList.map(consumer) ⇒
Method takes in a consumer function, and returns an array consisting of the results of applying the given function to the elements of the list.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: Array an array with all the new elements values  

| Param | Description |
| --- | --- |
| consumer | the consumer function, that returns the new value of the node data |

<a name="TreeList+toArray"></a>

### treeList.toArray() ⇒
Method returns the contents of the list as an array

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: Array the contents of the list  
<a name="TreeList+reduce"></a>

### treeList.reduce(reducer, initial_value) ⇒
The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: Object the final value  

| Param | Description |
| --- | --- |
| reducer | the reducer function |
| initial_value | the initial value |

<a name="TreeList+every"></a>

### treeList.every(callback) ⇒
The every() method tests whether all elements in the array pass the test implemented by the provided function.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: boolean true if all elements pass the test  

| Param | Description |
| --- | --- |
| callback | the callback |

<a name="TreeList+some"></a>

### treeList.some(callback) ⇒
The some() method tests whether at least one element in the array passes the test implemented by the provided function.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: boolean true if all elements pass the test  

| Param | Description |
| --- | --- |
| callback | the callback |

<a name="TreeList+find"></a>

### treeList.find(callback) ⇒
The find() method returns the value of the first element in the array that satisfies the provided testing function.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: Object the element if found, else undefined  

| Param | Description |
| --- | --- |
| callback | the callback |

<a name="TreeList+concat"></a>

### treeList.concat(array)
Method merges the given array with the list.

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  

| Param | Description |
| --- | --- |
| array | the array to be merged |

<a name="TreeList.comparator"></a>

### TreeList.comparator(curr_ele, new_ele) ⇒
The default comparator, sorts the elements in ascending order

**Kind**: static method of [<code>TreeList</code>](#TreeList)  
**Returns**: int returns +1 if the new element is to be placed right to the current element,
             -1 if the new element is to be placed to the left of the current element
             and 0 if the elements are equal.  

| Param | Description |
| --- | --- |
| curr_ele | the previous element |
| new_ele | current element |

<a name="TreeList.leftMost"></a>

### TreeList.leftMost(node)
Method returns the left most node with reference to the current node.

**Kind**: static method of [<code>TreeList</code>](#TreeList)  

| Param | Description |
| --- | --- |
| node | the node with reference to which the current node is to be found out. |
