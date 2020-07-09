

const fs=require('fs')
const chalk=require('chalk')
const getnotes=()=>{
    return 'your notes...'
}
const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('new notes added')
    }
    else{
        console.log('title taken')
    }
}
const removeNote=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title!=title)
    if(notesToKeep.length===notes.length){
        console.log(chalk.green.inverse('No note removed'))
    }
    else{
        console.log(chalk.red.inverse('Note removed'))
    }
    saveNotes(notesToKeep)
}
const listNotes=function(){
    const notes=loadNotes()
    console.log(chalk.green.bold('your notes:'))
    notes.forEach(note => {
        console.log(note.title)
    });
}
const readNote=function(title){
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not Found!'))
    }
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }

}


module.exports={
    getnotes: getnotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}