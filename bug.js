```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* ... */ }},
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Error: Should be $sum: $value 
  {$sort: {sum: -1}}
])
```