export const useFetching = async (path: string, options?: object) => {
  const config = useRuntimeConfig()
  
  return await useFetch(() => `${config.public.baseURL}${path}`, options)
}
