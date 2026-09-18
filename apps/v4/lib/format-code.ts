export async function formatCode(code: string, _styleName: string) {
  code = code.replaceAll("export default", "export")

  code = code.replace(
    /@\/(?:styles|examples)\/(base|radix|aria)(?:-[\w-]+)?\/(ui-rtl|ui)\/([\w-]+)/g,
    (_match, base, _type, component) => `@/components/ui/${base}/${component}`
  )

  code = code.replace(
    /@\/registry\/(?:bases\/)?(?:base|radix|aria)\/ui\/([\w-]+)/g,
    "@/components/ui/$1"
  )
  code = code.replace(
    /@\/registry\/(?:new-york-v4\/)?ui\/([\w-]+)/g,
    "@/components/ui/$1"
  )
  code = code.replaceAll("@/registry/new-york-v4/", "@/components/")
  code = code.replaceAll("@/registry/", "@/components/")

  return code
}
