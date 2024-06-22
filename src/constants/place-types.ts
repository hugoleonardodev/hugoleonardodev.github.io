const placeTypes = [
  { value: 'skatepark', description: 'Pista' },
  { value: 'pumptrack', description: 'Pumptrack' },
  { value: 'vertical', description: 'Vertical' },
  { value: 'street', description: 'Rua' },
  { value: 'avenue', description: 'Avenida' },
  { value: 'road', description: 'Rodovia' },
  { value: 'hill', description: 'Serra' },
  { value: 'square', description: 'Praça' },
  { value: 'park', description: 'Parque' },
  { value: 'stadium', description: 'Estádio' },
  { value: 'parking', description: 'Estacionamento' },
  { value: 'bike-lane', description: 'Ciclovia' },
  { value: 'ice-rink', description: 'Pista de gelo' },
]

const placeRadioValues = {
  publicPrivateRadio: [
    { value: 'public', label: 'Local público' },
    { value: 'private', label: 'Local privado' },
  ],
  indoorOutdoorRadio: [
    { value: 'outdoor', label: 'Local aberto' },
    { value: 'indoor', label: 'Local coberto' },
  ],
  adultsChildrenRadio: [
    { value: 'children', label: 'Adultos e crianças' },
    { value: 'adults', label: 'Somente adultos' },
  ],
  petsRadio: [
    { value: 'yes', label: 'Permite animais' },
    { value: 'no', label: 'Não permite animais' },
  ],
}

const gearsAllowedCheckboxOptions = [
  { label: 'Inline', value: 'inline', color: 'red' },
  { label: 'Speed', value: 'speed', color: 'blue' },
  { label: 'Wizard', value: 'wizard', color: 'green' },
  { label: 'Blades', value: 'blades', color: 'yellow' },
  { label: 'Street', value: 'street', color: 'purple' },
  { label: 'Quad', value: 'quad', color: 'orange' },
  { label: 'Hockey', value: 'hockey', color: 'gray' },
  { label: 'Others', value: 'other', color: 'indigo' },
]

const placeInfraCheckboxOptions = [
  { label: 'Estacionamento', value: 'parking', color: 'red' },
  { label: 'Banheiros', value: 'bathrooms', color: 'green' },
  { label: 'Restaurantes', value: 'restaurants', color: 'purple' },
  { label: 'Lanchonetes', value: 'snacks', color: 'blue' },
  { label: 'Wi-fi', value: 'wifi', color: 'orange' },
  { label: 'Transporte', value: 'transportation', color: 'yellow' },
  { label: 'Outros', value: 'other', color: 'indigo' },
]

export { placeTypes, placeRadioValues, gearsAllowedCheckboxOptions, placeInfraCheckboxOptions }
