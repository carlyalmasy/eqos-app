import CardAside from "../../layouts/CardAside";
import Dimension from "../../components/layout/Dimension";
import Markdown from "../../components/Markdown";
import EQOSQuality from "../../topics/Resources/EQOSQuality.md";

import dimensions from "../../topics/Resources/Dimensions";

export default function Resources() {
    return (
        <CardAside>
            <Markdown>{EQOSQuality}</Markdown>
            <>
                <h4 className="mt-0 text-neutrals-dark-600">The Five Key Dimensions</h4>
                {
                    dimensions.map((dimension) => {
                        return <Dimension title={ dimension.title }>{ dimension.text }</Dimension>
                    })
                }
            </>
        </CardAside>
    );
}
