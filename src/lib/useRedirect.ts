export const useRedirect = () => {
  return {
    openBaidu(href: string) {
      window.open(`https://www.baidu.com/s?wd=${href}`)
    }
  }
}
