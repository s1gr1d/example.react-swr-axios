# SWR with Axios

A simple, scalable example for using SWR with Axios in your React application.

[SWR](https://swr.vercel.app/) provides React hooks for data fetching. It is a good choice for handling **server cache
state** in your application. This kind of state comes from a server and is being cached on the client for further usage.

This example uses following data from the [NASA API](https://api.nasa.gov/):

* apod (Astronomy Picture of the Day)
* donki (Database Of Notifications, Knowledge, Information)

## Table Of Contents:

- [Project Structure](#project-structure)
- [Axios client](#axios-client)
- [Reusable SWR Hook](#reusable-swr-hook)
- [API requests](#api-requests)

## Project Structure

The most important folders in this example are following:

```sh
src
|
+-- api      # API request declarations and api hooks (uswSWR)
|
+-- lib      # re-exported libraries preconfigured for the application (Axios, swr)
|
+-- types    # types used across the application
```

## Axios Client

As we use the NASA api we create a **single instance** of the Axios client that's been pre-configured and reused
throughout the application.

[Axios Client Code](./src/lib/axios/axiosInstance.ts)

## Reusable SWR Hook

The `useSWRAxios` hook provides a base wrapper for the SWR library with some basic additional functionality like
providing the `isLoading` status.

This hook is always used when interacting with the SWR library.

[useSWRAxios](./src/lib/swr/useSWRAxios.ts)

## SWR Keys

SWR uses the provided key to differentiate between the cached data. SWR sends just 1 request per key to the API. To
create and reuse keys (e.g. when we need the key for a `mutate`) they are generated with the cache key generator.

Some requests contain query data. This has to be included in the request key, so SWR can differentiate
between requests with a different query.

[Cache Key Generator](./src/lib/swr/cacheKeyGenerator.ts)

## API Requests

The code for API requests and corresponding SWR hooks is located in the [api](./src/api) folder. This folder contains sub-folders for each collection
of api requests. In this example we have two `api` modules:

* apod (Astronomy Picture of the Day)
* donki (Database Of Notifications, Knowledge, Information)

```sh
apod
|
+-- fetchers.ts    # API request declarations
|
+-- swrHooks.ts    # SWR hooks
|
+-- index.ts       # export file
```

Instead of declaring API requests on the go, they are defined and exported separately. A declaration is a fetcher
function that calls an endpoint.

The defined fetchers can then be used inside `swrHooks.ts`.

[API Request Declaration Code (DONKI)](./src/api/donki/fetchers.ts)

[SWR Hooks Code (DONKI)](./src/api/donki/swrHooks.ts)








