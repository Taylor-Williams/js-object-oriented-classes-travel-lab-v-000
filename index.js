class Driver{
  constructor(name, date){
    this.name = name
    this.startDate = date
  }

  function startDate(date){
    return Date.parse(date)
  }

  function yearsExperienceFromBeginningOf(year){
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
