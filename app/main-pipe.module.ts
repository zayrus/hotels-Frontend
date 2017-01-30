import { NgModule } from '@angular/core'
import {CommonModule} from "@angular/common"

import {PricePipe} from "./pipes/price-pipe"
import {NamePipe} from "./pipes/name-pipe"
import {StarsPipe} from "./pipes/stars-pipe"

@NgModule({
    declarations:[
      PricePipe,
      NamePipe,
      StarsPipe
    ],
    imports:[CommonModule],
    exports:[
      PricePipe,
      NamePipe,
      StarsPipe
    ]
})

export class MainPipe{}
