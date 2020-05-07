https://js.checkio.org/mission/old-secret-message/share/1c3120c15521c21fdb097486b594e964/

You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.

For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, 
we get the message "HELLO".

Input: A text as a string (unicode).

Output: The secret message as a string or an empty string.

Example:

findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"

findMessage("hello world!") == ""
