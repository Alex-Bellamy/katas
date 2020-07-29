function litres(time) {
  const waterRequired = time * 0.5 
  const waterRoundedDown = Math.floor(waterRequired)
  return waterRoundedDown
}