import Markdown from "../components/Markdown.jsx";
import DeveloperIntro from "../topics/Developer/DeveloperIntro.md.js";
import Card from "../components/Card.jsx";
import { NavLink } from "react-router-dom";

export default function Developer() {
    return (
        <>
            <div className="lg:flex justify-start space-x-0 lg:space-x-14">
                <div className="flex-1">
                    <Markdown>{DeveloperIntro}</Markdown>
                </div>
                <Card color="silver-100" borderRadius="none" dropShadow="none" marginTop="14">
                    <div className="p-8">
                        <h4 className="mt-0 text-neutrals-dark-600">API Documentation</h4>
                        <p>A description of what you will find at the two links below--just enough information so I know what these contain.</p>
                        <p><NavLink to="api">API Outline</NavLink></p>
                        <p><NavLink to="spec">API Specification</NavLink></p>
                    </div>
                    </Card>
            </div>
        </>
    );
}