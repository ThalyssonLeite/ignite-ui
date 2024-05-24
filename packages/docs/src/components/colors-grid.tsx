import { colors } from '@gpssat/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, hex]) => {
    return (
      <div
        key={name}
        style={{
          background: hex,
          padding: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(hex, '#FFF') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${name}</strong>
          <span>{hex}</span>
        </div>
      </div>
    )
  })
}
