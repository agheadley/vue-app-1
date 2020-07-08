let state= {
    activeFilename:'x.txt',
    activeContent:'the quick brown fox.'
}

let getActiveFile=()=>{
    return {name:state.activeFilename,content:state.activeContent};
}

let setActiveFile=(name,content)=>{
    state.activeFilename=name;
    state.activeContent=content;
}

export {getActiveFile,setActiveFile}
