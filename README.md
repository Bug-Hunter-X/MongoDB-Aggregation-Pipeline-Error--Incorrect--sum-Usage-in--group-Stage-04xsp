# MongoDB Aggregation Pipeline Bug: Incorrect $sum Usage
This repository demonstrates a common error in MongoDB aggregation pipelines: incorrectly using a string literal instead of the actual field reference within the $sum operator during the $group stage.

## Bug Description
The aggregation pipeline attempts to sum values from the field 'value'. However, it mistakenly uses the string '"$value"' instead of the field expression '$value'. This leads to unexpected results, possibly zero or an error.

## Solution
The solution is simple: use the correct field expression '$value' instead of the string literal '"$value"' in the $sum operator.

## How to Reproduce
1.  Set up a MongoDB instance.
2.  Create a sample collection with documents containing 'field' and 'value' fields.
3.  Run the incorrect aggregation pipeline (bug.js).
4.  Observe the incorrect output.
5.  Run the corrected aggregation pipeline (bugSolution.js) and compare the results.
