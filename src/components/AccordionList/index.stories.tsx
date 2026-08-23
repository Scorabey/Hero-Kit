import {type AccordianVariant, AccordionList} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {Accordion} from "../Accordion";

const meta: Meta<typeof AccordionList> = {
    component: AccordionList,
    tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof AccordionList> = {
    args: {
        variant: "default",
        children: (variant: AccordianVariant) => (
            <>
                <Accordion variant={variant} label={"Accordion"} >
                    Content
                </Accordion>
                <Accordion variant={variant} label={"Accordion"} >
                    Content
                </Accordion>
            </>
        ),
    }
};
