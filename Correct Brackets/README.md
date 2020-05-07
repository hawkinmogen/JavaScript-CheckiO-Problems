https://js.checkio.org/mission/old-brackets/share/be3180b7024859e33191b1d0af8fd29a/

You are given an expression with numbers, brackets and operators. For this task only the brackets matter. 
Brackets come in three flavors: "{}" "()" or "[]". Brackets are used to determine scope or to restrict some expression. 
If a bracket is open, then it must be closed with a closing bracket of the same type. 
The scope of a bracket must not intersected by another bracket. 
In this task you should make a decision, whether to correct an expression or not based on the brackets. 
Do not worry about operators and operands.

Input: An expression with different of types brackets as a string (unicode).

Output: A verdict on the correctness of the expression in boolean (True or False).

Example:

brackets("((5+3)*2+1)") == true

brackets("{[(3+1)+2]+}") == true

brackets("(3+{1-1)}") == false

brackets("[1+1]+(2*2)-{3/3}") == true

brackets("(({[(((1)-2)+3)-3]/3}-3)") == false

brackets("2+3") == True
