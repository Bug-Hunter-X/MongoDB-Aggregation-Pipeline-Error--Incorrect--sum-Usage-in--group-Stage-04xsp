```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* ... */ }},
  {$group: {_id: "$field", sum: {$sum: $value}}}, //Corrected: Using $value directly
  {$sort: {sum: -1}}
])
```