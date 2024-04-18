# EQOS App

The EQOS App is the front-end to EQOS data.  It uses a series of APIs provided by EQOS Core in order to get credential information formatted specifically for application consumption (as opposed to a general data API).  It is the most user-facing piece of the EQOS ecosystem.

## Key Technologies

- Vite
- React + Preact Signals
- Tailwind (UI)
- Axios

## Basic Usage

After cloning this repository, you can begin working on the application by adding a `.env` file with contents such as:

```bash
VITE_CORE_URL="https://dev.core.eqos.org"
```

The `VITE_CORE_URL` defines the API endpoint to use for fetching EQOS related data as well as for display in certain contexts.  This should pretty much always be the `dev` EQOS Core URL.  Future variables may be defined for external CMS or authentication purposes, but at present, this is the only required variable.

### Running Development Server

As with any Vite project, you can simply run the following in your terminal to build and locally host (with hot module reloading) a local development server.  Local development is the preferred method for the `eqos-app` project.

```
npm run dev
```
