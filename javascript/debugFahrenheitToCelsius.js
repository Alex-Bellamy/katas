function weatherInfo (c) {
  var c = convertToCelsius(c)
  if (c > 0)
    return (c + " is above freezing temperature")
  else 
    return (c + " is freezing temperature")
}

function convertToCelsius (fahrenheit) {
  var celsius = (fahrenheit - 32) * (5/9)
  return celsius
}