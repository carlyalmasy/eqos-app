import Markdown from "../components/Markdown.jsx";
import EQOSQuality from "../topics/Resources/EQOSQuality.md.js";
import Card from "../components/Card.jsx";
import KeyDimension from "../components/KeyDimension.jsx"

export default function Resources() {
    return (
        <>
            <div className="lg:flex justify-start space-x-0 lg:space-x-14">
                <div className="flex-1">
                    <Markdown>{EQOSQuality}</Markdown>
                </div>
                <Card color="silver-100" borderRadius="md" dropShadow="none" marginTop="14" maxWidth="500px">
                    <div className="p-8">
                        <h4 className="mt-0 text-neutrals-dark-600">The Five Key Dimensions</h4>
                        <KeyDimension title="Employment">Indicates new or improved employment opportunities at a satisfactory pay level.</KeyDimension>
                        <KeyDimension title="Opportunity">Reflects access to quality jobs with safe working conditions, attractive benefits, and potential for upward mobility.</KeyDimension>
                        <KeyDimension title="Learning">Represents the acquisition of valuable skills relevant to one's career path.</KeyDimension>
                        <KeyDimension title="Access">Ensures inclusive participation across demographics, with a competitive time-to-completion cost.</KeyDimension>
                        <KeyDimension title="Demand">Validates that the attained skills align with the needs of high-demand occupational fields.</KeyDimension>
                    </div>
                    </Card>
            </div>
        </>
    );
}
