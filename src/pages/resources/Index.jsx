// components
import CardAside from "../../layouts/CardAside";
import Dimension from "../../components/resources/Dimension";
import Markdown from "../../components/Markdown";

// content
import quality from "../../topics/resources/EQOSQuality.md";
import dimensions from "../../topics/resources/Dimensions";

export default function Resources() {
    return (
        <CardAside>
            <Markdown>{quality}</Markdown>
            <>
                <h4 className="mt-0 text-neutrals-dark-600">The Five Key Dimensions</h4>
                {
                    dimensions.map((dimension, key) => {
                        return <Dimension key={key} title={ dimension.title }>{ dimension.text }</Dimension>
                    })
                }
            </>
        </CardAside>
    );
}
