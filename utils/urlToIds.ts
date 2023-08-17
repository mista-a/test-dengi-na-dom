const urlsToIds = (urls: string[]) => {
  const ids = urls.map((url: string) => {
    const splitUrl = url.split('/')
    return splitUrl[splitUrl.length - 1]
  })
  return ids
}

export default urlsToIds
