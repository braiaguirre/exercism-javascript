const VALUES = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export const decodedValue = ([band1, band2]) => VALUES.indexOf(band1) * 10 + VALUES.indexOf(band2);