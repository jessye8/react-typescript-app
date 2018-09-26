interface IPropertiesPaneProps {
    toggle: boolean;
    description: string;
    propCallback(description: string): Function;
}

export default IPropertiesPaneProps;