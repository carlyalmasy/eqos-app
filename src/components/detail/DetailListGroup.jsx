import DetailListHeader from "./DetailListHeader";
import DetailListItem from "./DetailListItem";
import Grid from "../layout/Grid";

export default function DetailListGroup({ items }) {
    return (
        <>
            <Grid split="2">
                {Object.keys(items?.value).map((data, i) => {
                    return (
                        <>
                            <div key={i}>
                                <DetailListHeader header={ header } />
                                <DetailListItem item={ data } />
                            </div>
                        </>
                    );
                })}
            </Grid>
        </>
    );
}
