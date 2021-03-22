export function getRedirectPath(type, header) {
  let path = ''
  // 根据type 得到path
  path += type === 'laoban' ? '/laoban' : '/dashen'
  // 如果没有头像添加info
  if (!header) {
    path += 'info'
  }
  return path
}
