const express = require('express')
const router = new express.Router()
const Task = require('../models/task')



router.post('/task',async (req,res)=>{
    const task= new Task(req.body)
    
    try{
        task.save()
        res.send(task)
    } catch(e){
        res.status(400).send(e)
    }
  
})

router.get('/tasks',async (req,res)=>{
    
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    } catch(e){
        res.status(500).send(e)
    }
    
   
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id
    
    try{
        const task = await Task.findById(_id)

        if(!task){
            return res.status(400).send()
        }

        res.send(task)
    } catch(e){
        res.status(500).send(e)
    }
    
    
 
})


router.patch('/tasks/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }



try{

    const task = await Task.findById(req.params.id)

    updates.forEach((update)=>{
        task[update] = req.body[update]

        
    })

    await task.save() 
    if(!task){
        res.status(404).send({ error: 'No Such task'})

    }
    res.send(task)
}catch(e){
    res.status(400).send()
}

})


router.delete('/tasks/:id', async (req,res)=>{

    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            res.status(404).send({error: 'no such task present'})
        }

        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})

module.exports = router
