import Container from "../../layouts/Container";
import Markdown from "../../components/Markdown";
import Card from "../../components/Card";

// content
import DeveloperIntro from "../../topics/Developer/DeveloperIntro.md";

import { NavLink } from "react-router-dom";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function Developer() {
    return (
        <Container className="lg:flex justify-start space-x-0 lg:space-x-14">
            <div className="flex-1">
                <Markdown>{DeveloperIntro}</Markdown>
            </div>
            <Card color="silver-100" borderRadius="md" dropShadow="none" marginTop="14" maxWidth="500px">
                <div className="p-8">
                    <h4 className="mt-0 text-neutrals-dark-600">Quick Links</h4>
                    <p>
                        Use the links below to get started quickly and easily.  Got questions?
                        Contact us at <a href="mailto:support@eqos.org">support@eqos.org</a>.
                    </p>
                    <ul>
                        <li>
                            Developer References
                            <ul>
                                <li>
                                    <p>
                                        <NavLink to="/developers/api">API Documentation</NavLink>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <NavLink to="/developers/spec">EQOS Specification</NavLink>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <NavLink to="/devleopers/getting-started">Getting Started Guide</NavLink>
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Resources
                            <ul>
                                <li>
                                    <p>
                                        <a href={ baseUrl + '/openapi.yml' }>OpenAPI Specification (YML)</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href={ baseUrl + '/ns/v1' }>EQOS Vocabulary (JSON)</a>
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Bulk Data
                            <ul>
                                <li>
                                    <p>
                                        <NavLink to="/devleopers/download">Download</NavLink>
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Card>
        </Container>
    );
}
