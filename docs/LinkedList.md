<a name="LinkedList"></a>

## LinkedList
**Kind**: global class  

* [LinkedList](#LinkedList)
    * [new LinkedList(root)](#new_LinkedList_new)
    * [.push(new_ele)](#LinkedList+push) ⇒
    * [.insertAt(index, new_ele)](#LinkedList+insertAt) ⇒
    * [.get(index)](#LinkedList+get) ⇒
    * [.contains(ele)](#LinkedList+contains) ⇒
    * [.indexOf(ele)](#LinkedList+indexOf) ⇒
    * [.lastIndexOf(ele)](#LinkedList+lastIndexOf) ⇒
    * [.remove(ele)](#LinkedList+remove) ⇒
    * [.removeAt(index)](#LinkedList+removeAt) ⇒
    * [.pop()](#LinkedList+pop) ⇒
    * [.shift()](#LinkedList+shift) ⇒
    * [.peekFirst()](#LinkedList+peekFirst) ⇒
    * [.peekLast()](#LinkedList+peekLast) ⇒
    * [.concat(array)](#LinkedList+concat)
    * [.toArray()](#LinkedList+toArray) ⇒

<a name="new_LinkedList_new"></a>

### new LinkedList(root)

| Param | Default | Description |
| --- | --- | --- |
| root | <code></code> | The root element |

<a name="LinkedList+push"></a>

### linkedList.push(new_ele) ⇒
Method pushes the given element in the Linked List

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: boolean true, if the push is successful, else false  

| Param | Description |
| --- | --- |
| new_ele | The new element |

<a name="LinkedList+insertAt"></a>

### linkedList.insertAt(index, new_ele) ⇒
Method lets you insert an element at the given index

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: boolean true, if the push is successful, else false  

| Param | Description |
| --- | --- |
| index | The index at which the new element is to be inserted |
| new_ele | The new element |

<a name="LinkedList+get"></a>

### linkedList.get(index) ⇒
Method gets the element at the given index.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object The object at the given index  

| Param | Description |
| --- | --- |
| index | the index |

<a name="LinkedList+contains"></a>

### linkedList.contains(ele) ⇒
Method checks if the List contains the method passed as the argument

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: boolean true, if the element is present in the list, else false.  

| Param | Description |
| --- | --- |
| ele | The element to be checked |

<a name="LinkedList+indexOf"></a>

### linkedList.indexOf(ele) ⇒
Method returns the first index of the given element in the list, else returns -1

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: int the first index of the element in the list  

| Param | Description |
| --- | --- |
| ele | The element whose index in the list is to be checked |

<a name="LinkedList+lastIndexOf"></a>

### linkedList.lastIndexOf(ele) ⇒
Method returns the last index of the given element in the list, else returns -1

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: int the last index of the element in the list  

| Param | Description |
| --- | --- |
| ele | The element whose last index in the list is to be checked |

<a name="LinkedList+remove"></a>

### linkedList.remove(ele) ⇒
Method removes the first occurrence of the given element from the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object The object that is removed, or null  

| Param | Description |
| --- | --- |
| ele | The element which is to be removed from the list |

<a name="LinkedList+removeAt"></a>

### linkedList.removeAt(index) ⇒
Method removes the element from the list at the given index

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object The object that is removed, or null  

| Param | Default | Description |
| --- | --- | --- |
| index | <code>0</code> | The index at which the element is to be removed |

<a name="LinkedList+pop"></a>

### linkedList.pop() ⇒
Method removes the element at the end of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object the removed element  
<a name="LinkedList+shift"></a>

### linkedList.shift() ⇒
Method removes the element at the start of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object the removed element  
<a name="LinkedList+peekFirst"></a>

### linkedList.peekFirst() ⇒
Method retrieves, but does not remove, the first element of this list, or returns null if this list is empty

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object first element in the list  
<a name="LinkedList+peekLast"></a>

### linkedList.peekLast() ⇒
Method retrieves, but does not remove, the last element of this list, or returns null if this list is empty

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Object last element in the list  
<a name="LinkedList+concat"></a>

### linkedList.concat(array)
Method merges the given array with the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Description |
| --- | --- |
| array | the array to be merged |

<a name="LinkedList+toArray"></a>

### linkedList.toArray() ⇒
Method returns the contents of the list as an array

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: Array the contents of the list  
