import { Component } from "@angular/core";

// Import Interface
import { Band } from "./band";
import { BandsService } from "./bands.service";

@Component({
    selector: 'app-bands',
    templateUrl: './bands.component.html',
    styleUrls: ['./bands.component.sass']
})

export class BandsComponent  {
    title = 'Bandas';
    bands: Band[] = [];

    constructor(private bandsService: BandsService) {}

    ngOnInit(): void {
        this.getBands();
    }

    getBands(): void {
        this.bandsService.getBands()
            .subscribe(bands => this.bands = bands);
    }
}
