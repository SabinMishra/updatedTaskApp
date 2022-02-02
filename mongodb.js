// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectID }= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' 

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    
    console.log('Connected correctly!')
    const db= client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Vikram',
    //     age:26
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Rabin',
    //         age:28
    //     },
    //     {
    //         name:'Joey',
    //         age:32
    //     }
    // ],(error,result)=>{
    //         if(error){
    //             return console.log('Unable to insert documents!')
    //         }
    //         console.log(result)

    // })



    //  db.collection('tasks').insertMany([
    //      {
    //          description:'description one',
    //          completed:true
    //      },
    //      {
    //          description:'description two',
    //          completed:false
    //      },
    //      {
    //          description:'description three',
    //          completed:true
    //      }
    //  ], (error,result)=>{
    //      if(error){
    //          return console.log('Unable to connect to database!')
    //      }
    //      console.log(result)
    //  })



    //Read
    // db.collection('users').findOne({ age:28 }, (error,user)=>{
    //     if(error){
    //         return console.log('Unable tofetch!')
    //     }

    //     console.log(user)
    // })
     
    // db.collection('users').find( { age:28 }).toArray((error,users)=>{
    //     console.log(users)
    // })


    //Update
    // db.collection('users').updateOne({
    //     _id: new ObjectID("61f01545536a79c52aa1ee91")
    // },{
    //     $inc:{
    //         age:50
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //Update many
    // db.collection('tasks').updateMany({completed:false}, {
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{console.log(result)}).catch((error)=>{
    //     console.log(error)
    // }) 


    //Delete

    db.collection('users').deleteMany({
        age:27
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
