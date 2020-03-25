declare type Config = {
    delay: number;
    hoverClass: string;
    activeClass: string;
    switch: boolean;
    timespan: number;
    onOpen: () => void;
    onClose: () => void;
};
export default function (element: NodeListOf<Element> | string, option: Partial<Config>): void;
export {};
