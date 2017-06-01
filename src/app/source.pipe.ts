import { Pipe, PipeTransform } from '@angular/core';
import { Story } from './story.model';

@Pipe({
  name: 'source',
  pure: false
})
export class SourcePipe implements PipeTransform {

  transform(input: Story[], source: string[]) {
    var output: Story[] = [];
    if (source.indexOf("CNN") > -1) {
      for(var i = 0; i < input.length; i++) {
        if (input[i].source === "CNN") {
          output.push(input[i]);
        }
      }
    }
    if (source.indexOf("BBC") > -1) {
      for(var i = 0; i < input.length; i++) {
        if (input[i].source === "BBC") {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
