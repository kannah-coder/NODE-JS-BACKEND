function generateNumber(){
    return Math.floor(Math.random()*100)+1;

}
function celciusToFarheniet(c){
    return (c*9)/5+32;
}

module.exports={
    generateNumber,
    celciusToFarheniet
};