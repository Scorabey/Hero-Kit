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
                <Accordion variant={variant} label={"Accordion 1"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 2"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 3"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
            </>
        ),
    }
};

export const Shadow: StoryObj<typeof AccordionList> = {
    args: {
        variant: "shadow",
        children: (variant: AccordianVariant) => (
            <>
                <Accordion variant={variant} label={"Accordion 1"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 2"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 3"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
            </>
        ),
    }
};

export const Bordered: StoryObj<typeof AccordionList> = {
    args: {
        variant: "bordered",
        children: (variant: AccordianVariant) => (
            <>
                <Accordion variant={variant} label={"Accordion 1"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 2"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 3"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
            </>
        ),
    }
};

export const Splitted: StoryObj<typeof AccordionList> = {
    args: {
        variant: "splitted",
        children: (variant: AccordianVariant) => (
            <>
                <Accordion variant={variant} label={"Accordion 1"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 2"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
                <Accordion variant={variant} label={"Accordion 3"} description={"Press to expand"} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion>
            </>
        ),
    }
};
