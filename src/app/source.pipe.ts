import { Pipe, PipeTransform } from '@angular/core';
import { Story } from './story.model';

@Pipe({
  name: 'source',
  pure: false
})
export class SourcePipe implements PipeTransform {

  transform(input: Story[], source) {
    var output: Story[] = [];
    if(source === "CNN") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].source === "CNN") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(source === "BBC") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].source === "BBC") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
