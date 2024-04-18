// components
import CardAside from "../../layouts/CardAside";
import Dimension from "../../components/layout/Dimension";
import Markdown from "../../components/Markdown";

// topics
import quality from "../../topics/Resources/EQOSQuality.md";
import dimensions from "../../topics/Resources/Dimensions";

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
