function capitalize( text ) {
  return text.replace(/(?:^|\s)\S/g, word => word.toUpperCase() )
}

export { capitalize }