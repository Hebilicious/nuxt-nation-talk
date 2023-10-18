export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)

  const config = useRuntimeConfig(event)

  const { access_token } = await $fetch<{ access_token: string }>("https://github.com/login/oauth/access_token", {
    method: "POST",
    body: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code
    }
  })

  const ghUser = await $fetch<{ id: number; login: string }>("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  })

  console.log(ghUser)

  setCookie(event, "github-user", JSON.stringify(ghUser))

  return await sendRedirect(event, `/${ghUser.login.toLowerCase()}`)
})
