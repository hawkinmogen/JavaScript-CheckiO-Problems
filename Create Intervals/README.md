https://js.checkio.org/mission/old-create-intervals/share/ab6d7305772505561f681fe587a6e3a0/

From a Array of Integers you have to create a list of closed intervals as Arrays, 
so the intervals are covering all the values found in the set.

A closed interval includes its endpoints! The interval 1..5, for example, 
includes each value x that satifies the condition 1 <= x <= 5.

Values can only be in the same interval if the difference between a value and the next smaller value in the set equals one, 
otherwise a new interval begins. Of course, the start value of an interval is excluded from this rule.
A single value, that does not fit into an existing interval becomes the start- and endpoint of a new interval.

Input: Array of Integers.

Output: Array of Array of two Integers, indicating the endpoints of the interval. 
The Array should be sorted by start point of each interval.

Examples:

createIntervals([1, 2, 3, 4, 5, 7, 8, 12]) == [[1, 5], [7, 8], [12, 12]]

createIntervals([1, 2, 3, 6, 7, 8, 4, 5]) == [[1, 8]]
