// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocationofpassenger){
    let Scuberheadquaters = 42
    return Math.abs(pickuplocationofpassenger - Scuberheadquaters)
}
function distanceFromHqInFeet(pickupLocation) {
    let feetPerBlock = 264;
    const blocksAway = distanceFromHqInBlocks(pickupLocation);
    return blocksAway * feetPerBlock;
  } 
    //returns the number of feet traveled
function distanceTravelledInFeet(start, destination){
    let feetPerBlock = 264
    let distanceinfeet = Math.abs(start - destination)
    return(distanceinfeet * feetPerBlock)

}
function  calculatesFarePrice(start, destination) {
    let freesample= distanceTravelledInFeet(start, destination)
    if(freesample<= 400){
    return 0
    }
      else if (freesample<=2000){
          const fare=(freesample-400)*0.02
          return fare
    }
       else if (freesample>2000 && freesample<2500 ){
          const charge =25
          return charge
       }
       else if (freesample>2500){
          const reject = 'cannot travel that far'
          return reject
       }
}
        
 
  
      



     
    
    
