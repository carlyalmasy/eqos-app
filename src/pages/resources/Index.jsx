import Container  from "../../layouts/Container";
import Dimension from "../../components/layout/Dimension";
import Markdown from "../../components/Markdown";
import Card from "../../components/Card";
import EQOSQuality from "../../topics/Resources/EQOSQuality.md";

import dimensions from "../../topics/Resources/Dimensions";

export default function Resources() {
    return (
        <Container className="lg:flex justify-start space-x-0 lg:space-x-14">
            <div className="flex-1">
                <Markdown>{EQOSQuality}</Markdown>
            </div>
            <Card color="silver-100" borderRadius="md" dropShadow="none" marginTop="14" maxWidth="500px">
                <div className="p-8">
                    <h4 className="mt-0 text-neutrals-dark-600">The Five Key Dimensions</h4>
                    {
                        dimensions.map((dimension) => {
                            return <Dimension title={ dimension.title }>{ dimension.text }</Dimension>
                        })
                    }
                </div>
            </Card>
        </Container>
    );
}
