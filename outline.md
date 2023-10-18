# Navigating Nuxt 3's Authentication Landscape

Explore the diverse landscape of Nuxt 3 authentication.
From popular modules and libraries to third-party solutions and DIY approaches, this talk offers clear practical techniques to authenticate your users effectively.

## 1 - Introduction and authentication landscapes

Authentication is a complex topic and people on Twitter can be very opinionated about it. You will hear one person very convincingly say that you should use a third party solution and another person say that you should do it yourself. Nuxt allows you to do both.

## 2 - Diving into 3rd party modules : Auth.js

Next auth becomes authjs : https://twitter.com/balazsorban44/status/1603082914362986496

- https://authjs.dev/

Go over the features ...

- https://authjs-nuxt.pages.dev/

Talk about maintainaing authjs and how it came to be and https://github.com/sidebase/nuxt-auth

## 3 - Using a commercial solution : Clerk

auth0 and aws cognito were, as far as I can remember, the first companies to provide auth as as service for devs. There are dozens of commercial solutions that are available, and will provide you with a lot of features out of the box.
Clerk is one of them (not affiliated), that had vue support recently contributed by the community (https://github.com/wobsoriano).

- https://clerk.dev
- https://github.com/wobsoriano/vue-clerk
- https://github.com/wobsoriano/nuxt-clerk-template

## 4 - Doing it yourself

Let's walk through an example that doesn't have any dependencies.

## 5 - Conclusion and questions

Other important commercial alternatives :

- Firebase : https://vuefire.vuejs.org/guide/auth.html && nuxt module : https://github.com/vuejs/vuefire/tree/main/packages/nuxt
- Supabase Nuxt : https://supabase.nuxtjs.org/authentication
- Hanko (Passwordless) : https://github.com/nuxt-modules/hanko

OSS alternatives :

- Lucia : https://lucia-auth.com/guidebook/github-oauth/nuxt/
- Oslo : https://github.com/pilcrowOnPaper/oslo

Big entreprise use case :

- Keycloak : https://www.keycloak.org/
- Ory : https://www.ory.sh/open-source/

Tieing together with BFF : Wundergraph https://github.com/wundergraph/wundergraph/blob/main/packages/vue-query/README.md

## 6 - Answering questions
