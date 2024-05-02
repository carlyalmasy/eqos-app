// components
import { NavLink } from "react-router-dom";

import Markdown from "../../components/Markdown";

// content
import links from "../../topics/Developer/QuickLinks.md";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function Aside() {
    return (
        <>
            <Markdown>{links}</Markdown>
            <ul>
                <li>
                    Developer References
                    <ul>
                        <li>
                            <p>
                                <NavLink to="/developers/guide">Developers Guide</NavLink>
                            </p>
                        </li>
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
            </ul>
        </>
    );
}
