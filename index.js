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
  let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];
  constructor(beginningLocation, endLocation){
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }

  blocksTravelled() {
    let hor = this.beginningLocation.horizontal - this.endLocation.horizontal
    let vert = this.beginningLocation.vertical - this.endLocation.vertical
    return hor + vert
  }
}
