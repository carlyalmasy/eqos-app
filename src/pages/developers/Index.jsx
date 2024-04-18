import CardAside from "../../layouts/CardAside";
import Markdown from "../../components/Markdown";
import { NavLink } from "react-router-dom";

// content
import intro from "../../topics/Developer/DeveloperIntro.md";

const baseUrl = import.meta.env.VITE_CORE_URL;

export function Aside() {
    return (
        <>
            <h4 className="mt-0 text-neutrals-dark-600">Quick Links</h4>
            <p>
                Use the links below to get started quickly and easily.  Got questions?
                Contact us at <a href="mailto:solutions@eqos.org">solutions@eqos.org</a>
            </p>
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

export default function Developer() {
    return (
        <CardAside>
            <Markdown>{intro}</Markdown>
            <Aside />
        </CardAside>
    );
}
