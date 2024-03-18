import { FormEvent } from 'react';

export function getFormElementValueAsString(formElement: FormEvent<HTMLFormElement>, elementName: string): string {
    if (formElement == null) throw new Error("Form element is empty");
    if (elementName == null) throw new Error("Form element name is empty");
    if (formElement.currentTarget == null) throw new Error("Form element CurrentTarget is empty");
    if (formElement.currentTarget.elements == null) throw new Error("Form element CurrentTarget elements is empty");

    let element = formElement.currentTarget.elements.namedItem(elementName);

    if (element == null) throw new Error("Form element "+elementName+" is not found in Form");

    return ((element as HTMLInputElement).value as string);
}

export async function delay(ms:number) {
    return new Promise(resolve => setTimeout(
      () => {
        const val = Math.trunc(Math.random() * 100);
        resolve(val);
      }, ms
    ));
  };
