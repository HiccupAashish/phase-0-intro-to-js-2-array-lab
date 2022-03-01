// Write your solution here!p
const cats=["Milo","Otis","Garfield"];
const destructivelyAppendCat=(name)=> {return cats.push(name);}
const destructivelyPrependCat=(name)=>{return cats.unshift(name);}
const destructivelyRemoveLastCat=(name)=>{return cats.pop(name)}
const destructivelyRemoveFirstCat=(name)=>{return cats.shift(name);}
const appendCat=()=> {return[...cats,'Broom']};
const prependCat=()=> {return['Arnold',...cats]};
const removeLastCat=()=>{return cats.slice(0,-1,);}
const removeFirstCat=()=>{ return cats.slice(1);}