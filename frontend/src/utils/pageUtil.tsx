export function getFormElementValueAsString(formElement: HTMLFormElement, elementName: string): string {
    if (formElement == null) throw new Error("Form element is empty");
    if (elementName == null) throw new Error("Form element name is empty");
    if (formElemnt.currentTarget == null) throw new Error("Form element CurrentTarget is empty");
    if (formElemnt.currentTarget.elements == null) throw new Error("Form element CurrentTarget elements is empty");

    let element = formElement.currentTarget.elements.namedItem(elementName);

    if (element == null) throw new Error("Form element "+elementName+" is not found in Form");

    return ((element as HTMLInputElement).value as string);
}
