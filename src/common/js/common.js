// 本地储存
const Storage = (name, val) => {
  if (!name || typeof name !== 'string') return

  if (name && val === undefined) {
    let ret = JSON.parse(window.sessionStorage.getItem(`nsnds_${name}`))
    return ret === null ? undefined : ret
  } else {
    window.sessionStorage.setItem(`nsnds_${name}`, JSON.stringify(val))
    return 'ok'
  }
}

export {
  Storage
}
