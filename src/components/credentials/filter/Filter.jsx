// components
import SlideOver from "../../layout/SlideOver";
import Accordion from "../../layout/Accordion";
import ToggleGroup from "../../ToggleGroup";

export default function Filter() {
    return (
        <div>
            <h3 className="pb-8">Filter Menu</h3>
            <a className="uppercase font-bold text-eqos-400 hover:text-eqos-500">Clear All</a>
            <Accordion />
        </div>
    );
}
