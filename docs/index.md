## Classes

<dl>
<dt><a href="#TreeNode">TreeNode</a></dt>
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
| data |  | <p>the node data</p> |
| left | <code></code> | <p>the left node</p> |
| right | <code></code> | <p>the right node</p> |

<a name="TreeList"></a>

## TreeList
**Kind**: global class  

* [TreeList](#TreeList)
    * [new TreeList(comparator, root)](#new_TreeList_new)
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
    * [.__traverse()](#TreeList+__traverse)

<a name="new_TreeList_new"></a>

### new TreeList(comparator, root)

| Param | Default | Description |
| --- | --- | --- |
| comparator |  | <p>the comparator function</p> |
| root | <code></code> | <p>the root element Comparator working :-</p> <pre class="prettyprint source"><code>               1. The comparator returns -1 if the new node is lesser than the previous node                2. The comparator returns 0 if the new node is equal to the previous node                3. The comparator returns 1 if the new node is greater than the previous node</code></pre> |

<a name="TreeList+push"></a>

### treeList.push(new_ele) ⇒
<p>Method appends a new element to the list</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>boolean returns true if the insertion is successful</p>  

| Param | Description |
| --- | --- |
| new_ele | <p>the new element to be inserted in the list</p> |

<a name="TreeList+remove"></a>

### treeList.remove(ele) ⇒
<p>Removes the given element from the list</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>TreeNode the removed element</p>  

| Param | Description |
| --- | --- |
| ele | <p>The TreeNode that is to be removed</p> |

<a name="TreeList+pop"></a>

### treeList.pop() ⇒
<p>Method removes the element at the end of the list</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>TreeNode the removed element</p>  
<a name="TreeList+shift"></a>

### treeList.shift() ⇒
<p>Method removes the element at the start of the list</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>TreeNode the removed element</p>  
<a name="TreeList+contains"></a>

### treeList.contains() ⇒
<p>Method checks if the element is in the list</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>boolean true, if the element is present in the list</p>  
<a name="TreeList+indexOf"></a>

### treeList.indexOf() ⇒
<p>Method returns the index of the given element, or -1 if the element is not present.</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>int the index of the given element</p>  
<a name="TreeList+lastIndexOf"></a>

### treeList.lastIndexOf() ⇒
<p>Method returns the last index of the given element, or -1 if the element is not present.</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>int the last index of the given element</p>  
<a name="TreeList+forEach"></a>

### treeList.forEach(consumer)
<p>Method iterates through each of the element present in the list, with the give consumer function</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  

| Param | Description |
| --- | --- |
| consumer | <p>function that iterates through each of the element in the list</p> |

<a name="TreeList+join"></a>

### treeList.join(delimiter) ⇒
<p>Method creates and returns a new string by concatenating all of the elements in an array</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>String a string with all elements joined with the delimiter</p>  

| Param | Default | Description |
| --- | --- | --- |
| delimiter | <code>,</code> | <p>the delimiter for joining the elements in the string</p> |

<a name="TreeList+filter"></a>

### treeList.filter(predicate) ⇒
<p>Method takes in a predicate function, and returns a filtered array.</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>Array an array with all the elements that are accepted by the predicate</p>  

| Param | Description |
| --- | --- |
| predicate | <p>the predicate function, should return true if the element is to be present in the new array</p> |

<a name="TreeList+map"></a>

### treeList.map(consumer) ⇒
<p>Method takes in a consumer function, and returns an array consisting of the results of applying the given function to the elements of the list.</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>Array an array with all the new elements values</p>  

| Param | Description |
| --- | --- |
| consumer | <p>the consumer function, that returns the new value of the node data</p> |

<a name="TreeList+toArray"></a>

### treeList.toArray() ⇒
<p>Method returns the contents of the list as an array</p>

**Kind**: instance method of [<code>TreeList</code>](#TreeList)  
**Returns**: <p>Array the contents of the list</p>  
<a name="TreeList+__traverse"></a>