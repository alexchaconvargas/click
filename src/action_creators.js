export function increment(level) {
  return {
    type: 'INCREMENT',
    level
  }
}

export function levelup() {
    return {
      type: 'LEVEL_UP'
    }
}