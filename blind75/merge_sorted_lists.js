/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let newArr = [];

  //Define how many loops
  const numOfLoops = list1.length >= list2.length ? list1.length : list2.length;

};


console.log(mergeTwoLists([1,2,4], [1,3,4])) //Output: [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])) //Output: []
console.log(mergeTwoLists([], [0])) //Output: [0]