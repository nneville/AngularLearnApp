import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";

@Pipe ({
    name: 'convertToDash'
})
export class ConvertToDashPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(new RegExp(character, 'g'), '-');
    }

}