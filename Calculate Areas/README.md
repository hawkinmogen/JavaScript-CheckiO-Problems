https://js.checkio.org/mission/old-simple-areas/share/8c8b24ce7300d307849059eb8ff4f9b7/

You should write a function to calculate the area of simple figures: circles, rectangles and triangles. 
You are give an arbitrary number of arguments and depending on this, the function calculates area for the different figures.

One argument -- The diameter of a circle and you need to calculate the area of this circle.
Two arguments -- The side lengths of a rectangle and you need to calculate the area of this rectangle.
Three arguments -- The lengths of each side of a triangle and you need to calculate the area of this triangle.

The result should be given with two-digit precision as ±0.01.

Input: One, two or three arguments as floats or as integers.

Output: The area of the circle, rectangle or triangle as a float.

Example:

simpleAreas(3) == 7.07

simpleAreas(2, 2) == 4

simpleAreas(2, 3) == 6

simpleAreas(3, 5, 4) == 6

simpleAreas(1.5, 2.5, 2) == 1.5
