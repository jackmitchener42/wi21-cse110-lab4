1. Line 11 will log the value of variable i to the console because the var type is scoped to the function or globally regardless of location in the function.
2. Line 12 will log the value of variable discountedPrice to the console because the var type is scoped to the function or globally regardless of location in the function.
3. Line 13 will log the value of variable FinalPrice to the console because the variable was declared within the same function.
4. The function will return [50,100,150]. If you trace through the function what it does is takes the original prices multiplies them by the percentage that you pay after subtracting the discount and then rounds the value and stores it at the end of the discounted array. This question has a discount of .5 so the items are .5 the price.
5. Line 11 will try log the value of variable i to the console but will result in an error because i was declared in the for loop and was declared using let which scopes within function, if, or for in this case within the for loop.
6. Line 12 will try log the value of variable discountedPrice to the console but will result in an error because discountedPrice was declared in the for loop and was declared using let which scopes within function, if, or for in this case within the for loop.
7. Line 13 will log the value of variable FinalPrice to the console because the variable was declared within the same function but outside the for loop, the let keyword will scope within the function because there is nothing else around this declaration.
8. The function will return an error because we attempt to log variables to the console that do not exist. Without these logs the result would be the same as when we use var.
9. Line 11 will try log the value of variable i to the console but will result in an error because i was declared in the for loop and was declared using let which scopes within function, if, or for in this case within the for loop.
10. Line 12 will try log the value of variable discountedPrice to the console but will result in an error because discountedPrice was declared in the for loop and was declared using const, which scopes within function, if, or for, in this case within the for loop. However because we attempt to reassign a value to a const variable we will get an error.
11. Line 13 will log the value of variable FinalPrice to the console because the variable was declared within the same function but outside the for loop, the const keyword will scope within the function because there is nothing else around this declaration. However because we attempt to reassign a value to a const variable we will get an error.
12. The function will return an error because we attempt to reassign values for const variables.
13. A. student.name
    B. student['Grad Year']
    C. student.greeting();
    D.  student['Favorite Teacher'].name
    E. student.courseLoad[0]
14. A. Output: '32' it is adding 2 to a string so it converts 2 to a string and concatenates
    B. Output: 1 the string does not have a 2 in it so it must be an int so it subtracts 2 from 3 which is 1
    C. Output: 3 reads 3 as an int and adding null which has value 0 to it so nothing changes and the result is 3
    D. Output: '3null' '3' is read as a string so it reads null as a string and concatenates the two strings
    E. Output: 4 treats true as its numeric value 1 and adds 3 to it because it treats 3 as an int value and true is easily converted to an int
    F. Outpt: 0 both false and null have int values of 0 so it adds them together and results in 0
    G. Output: '3undefined' 3 is read as a string so it treates undefined as a string and concatenates the two strings
    H. Output: NaN because undefined is not present in "3" it treats them both as integer values and undefined is undefined so the result is Null
15. A. true this is because it recognizes the comparison to 1 an integer so it treats '2' as an int and 2 is greater than 1
    B. false because they both have quotes around them they are treated as strings and each character is compared beginning with the first and 1 is before 2 so it is false
    C. Output: true it compares them as integers and 2 is equal to 2
    D. Output: false the === checks for strict equality and the second two is in quotes and the first isn't so they are not strictly equal because they need type conversion to be equal
    E. Output: false, true has a value 1 and that is not equal to 2
    F. Output: true this is because 2 has a value so Boolean(2) is true
16. === checks for strict equality without type conversion so the values on either side must be the exact same to be equal, the == checks for equality using type conversion so things like 2 and '2' will return false for === and true for ==.
17. Logged: How are you? This one is logged because true has a value of 1 which is not equal to 2, so the if statement requirement is not met. 2 has a value which means Boolean(2) is true so the else if requirement is met so it enters that statement and logs How are you?
18. See file part1-question18.js
19. Result: [6,8,10]. ****** NEEDS EXPLANATION *** IDK WTF THIS IS
20. *** I DON"T FUCKING KNOW
21. FUCK THIS