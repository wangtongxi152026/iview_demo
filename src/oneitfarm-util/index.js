class OneitfarmUtil {
  routeGo (name, params) {
    if (params) {
      window.vm.$router.push({name: `page${name}`})
    } else {
      window.vm.$router.push({name: `page${name}`, params})
    }
  }
}
export { OneitfarmUtil }
