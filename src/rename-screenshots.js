import sketch from 'sketch'
const UI = sketch.UI

const formats = ['Device', 'Combined', 'Partial', 'Press', 'AppStore']
const devices = ['iPhone', 'iPad']
const iphoneModels = ['iPhone_17_Pro', 'iPhone_16_Pro', 'iPhone_15_Pro']
const ipadModels = ['iPad_Pro_M5_13inch', 'iPad_Pro_M4_13inch', 'iPad_Air_M2_11inch']
const types = ['Framed', 'Raw']
const apps = ['Capsule', 'Logger', 'Toolbox_Pro', 'Pushcut', 'Nautomate', 'Menu_Box'].sort()

function stripIncorrectSuffix(name) {
  const allModels = [...iphoneModels, ...ipadModels]
  for (const model of allModels) {
    if (name.endsWith(`_${model}_Dark`)) return name.replace(`_${model}_Dark`, '')
    if (name.endsWith(`_${model}_Light`)) return name.replace(`_${model}_Light`, '')
  }
  if (name.endsWith('_Dark')) return name.slice(0, -5)
  if (name.endsWith('_Light')) return name.slice(0, -6)
  return name
}

function renameLayers(selectedLayers, format, device, model, type, app) {
  let prefix = ''
  const correctDarkSuffix = `_${model}_Dark`
  const correctLightSuffix = `_${model}_Light`

  switch (format) {
    case 'Device':
      prefix = `${app}_Screenshots/${device}/${model}/${type}/${app}_`
      break
    case 'Combined':
      prefix = `${app}_Screenshots/Combined/${app}_`
      break
    case 'Partial':
      prefix = `${app}_Screenshots/Partial/${app}_`
      break
    case 'Press':
      prefix = `${app}_Screenshots/Press/${model}/${type}/${app}_`
      break
    case 'AppStore':
      prefix = `${app}_Screenshots/AppStore/${device}/${app}_`
      break
  }

  const useLightDark = format !== 'AppStore'

  selectedLayers.forEach((layer, i) => {
    const originalName = layer.name
    let name = stripIncorrectSuffix(originalName)

    const appPrefixPattern = new RegExp(`^${app}_`, 'i')
    name = name.replace(appPrefixPattern, '')

    if (!name.startsWith(prefix)) {
      name = prefix + name
    }

    if (useLightDark) {
      if (/_Dark$/.test(originalName)) {
        name += correctDarkSuffix
      } else if (/_Light$/.test(originalName)) {
        name += correctLightSuffix
      }
    }

    if (name !== layer.name) {
      layer.name = name
      console.log(`${i + 1}. Renamed "${originalName}" → "${name}"`)
    } else {
      console.log(`${i + 1}. Skipped "${name}" (already correct)`)
    }
  })
}

export default function () {
  const document = sketch.getSelectedDocument()
  const selectedLayers = document.selectedLayers

  if (selectedLayers.length === 0) {
    UI.message('No layers selected. Please select layers before running the plugin.')
    return
  }

  UI.getInputFromUser(
    'Select format type',
    {
      type: UI.INPUT_TYPE.selection,
      possibleValues: formats,
    },
    (errFormat, selectedFormat) => {
      if (errFormat) return console.log('Cancelled format selection.')

      UI.getInputFromUser(
        'Select app',
        {
          type: UI.INPUT_TYPE.selection,
          possibleValues: apps,
        },
        (errApp, selectedApp) => {
          if (errApp) return console.log('Cancelled app selection.')

          const askDevice = ['Device', 'AppStore'].includes(selectedFormat)
          const askModel = ['Device', 'Press'].includes(selectedFormat)
          const askType = ['Device', 'Press'].includes(selectedFormat)

          const getDevice = askDevice
            ? cb =>
                UI.getInputFromUser(
                  'Select device',
                  {
                    type: UI.INPUT_TYPE.selection,
                    possibleValues: devices,
                  },
                  (err, val) => {
                    if (err) return console.log('Cancelled device selection.')
                    cb(val)
                  }
                )
            : cb => cb('')

          const getModel = (device, cb) =>
            askModel
              ? UI.getInputFromUser(
                  `Select ${device || 'device'} model`,
                  {
                    type: UI.INPUT_TYPE.selection,
                    possibleValues: device === 'iPad' ? ipadModels : iphoneModels,
                  },
                  (err, val) => {
                    if (err) return console.log('Cancelled model selection.')
                    cb(val)
                  }
                )
              : cb('')

          const getType = cb =>
            askType
              ? UI.getInputFromUser(
                  'Select type',
                  {
                    type: UI.INPUT_TYPE.selection,
                    possibleValues: types,
                  },
                  (err, val) => {
                    if (err) return console.log('Cancelled type selection.')
                    cb(val)
                  }
                )
              : cb('')

          getDevice(device => {
            getModel(device, model => {
              getType(type => {
                renameLayers(selectedLayers.layers, selectedFormat, device, model, type, selectedApp)
                UI.message('Layer renaming complete.')
              })
            })
          })
        }
      )
    }
  )
}
