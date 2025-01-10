const baseUrl = import.meta.env.VITE_CORE_URL;

export default `
## EQOS Developers

We aim to make getting started with EQOS quality signal as easy and accessible as possible by
implementing open industry standards.

### OpenAPI Specification

EQOS API endpoints are described in the [OpenAPI Specification](https://swagger.io/specification/),
so integrating into tools like Postman, Swagger, etc, is a simple copy and paste away.

### JSON-LD

EQOS API uses JSON-LD with its own well-defined vocabulary and specification which operates as
as supplemental vocabulary to the
[W3C Verifiable Credentials 2.0](https://www.w3.org/TR/vc-data-model-2.0/) standard by adding meta
data regarding credentials subjects (aligned skills, job titles, etc) and credential quality
scoring at both the overall and dimensional level.

### REST

EQOS API is implemented as industry standard HTTP REST endpoints with robust query parameters for
searching from almost every perspective (credentials, skills, providers, etc).  The API itself as
well as the documentation are publicly available with limited restrictions.

### Bulk Data

If APIs aren't your thing, we've got you covered.  Bulk data downloads enable you to
get the latest and greatest quality signal information in a CSV format.  Import them
into your current infrastructure or analyze them in Jupyter Notebooks to gain insights into the
current credential landscape.
`

