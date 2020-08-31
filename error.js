
function alteraConstante(){
    try{
        const name = "Hackathon Democracia à distância";
        name = name + " - teste"
    }catch(error){
        console.error("Error: ", error.message);
    }
}
console.log("\n\n\n")
alteraConstante();

