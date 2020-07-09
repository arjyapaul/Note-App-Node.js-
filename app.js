// const add=require('./utils.js')
// const sum=add(4,-2)
// console.log(sum)
//const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
const { demandOption } = require('yargs')
// const msg=getnotes()
// console.log(msg)
// console.log(validator.isEmail('arjyapaul14@gmail.com'))
// console.log(validator.isURL('http://www.arjya.com'))
// console.log(chalk.bold.red('arjya'))
// console.log(process.argv[2])                               

//const command=process.argv[2]
yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body Content',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list items',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()

// if(command==='add'){
//     console.log('Adding Notes!')
// }
// else if(command==='remove'){
//     console.log('Removing notes!')
// }