let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return new Date(endDate).getFullYear() - this.startDate.getFullYear() + 1
  }
}
class Route{
  constructor(beginningLocation, endLocation){
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }
  blocksTravelled() {
    let vert = Math.abs(this.beginningLocation.vertical - this.endLocation.vertical)
    let startHor, endHor
    for(let i = 0; i < eastWest.length; i++){
      if(beginningLocation.horizontal === eastWest[i]){
        startHor = i
      }
      if(endLocation.horizontal === eastWest[i]){
        endHor = i
      }
    }
    let hor = Math.abs(startHor - endHor)
    return hor + vert
  }
}
