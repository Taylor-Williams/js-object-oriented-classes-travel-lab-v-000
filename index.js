class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = self.startDate(startDate)
  }

  startDate(date){
    return Date.parse(date)
  }

  yearsExperienceFromBeginningOf(year){
    yearRequest = Date.new(year)
    return startDate(date) - yearRequest
  }
}
class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }
}
