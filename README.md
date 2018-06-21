
# Calculate the Mode 

## In this challenge you will need to:
- Break a large problem down into smaller steps using pseudocode
- Iterate through data structures and manipulate the content
- Determine which data structure (arrays or hashes) to use based on challenge requirements
- Pass the included RSpec tests. **READ THE ERROR MESSAGES!**


## Let's begin
The method `calculate_mode` will take an `List` of numbers or strings as its input and return an `List` of the most frequent values.

If there's only one most-frequent value, it returns a single-element `List`.

For example:

```python
mode([1,2,3,3])         # => [3]
mode([4.5, 0, 0])       # => [0]
mode([1.5, -1, 1, 1.5]) # => [1.5]
mode([1,1,2,2])         # => [1,2]
mode([1,2,3])           # => [1,2,3], because all occur with equal frequency
mode(["who", "what", "where", "who"]) # => ["who"]
```
