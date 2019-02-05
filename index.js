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
    let hor = beginningLocation.horizontal - endLocation.horizontal
    let vert = beginningLocation.vertical - endLocation.vertical
    return hor + vert
  }
}
