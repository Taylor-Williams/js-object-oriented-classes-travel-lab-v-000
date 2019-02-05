class Driver{
  constructor(name, date){
    this.name = name
    startDate = startDate(date)
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
