import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Song } from "./song";
import { SongsService } from "./songs.service";

@Component({
    selector: 'app-songs',
    templateUrl: './songs.component.html',
    styleUrls: ['./songs.component.sass']
})
export class SongsComponent {

    songs: Song[] = [];

    constructor(private route: ActivatedRoute, private songsService: SongsService) {
    }
    
    bandname = this.route.snapshot.paramMap.get('bandname')?.toUpperCase();

    ngOnInit(): void {
        // Param Route - BandName
        this.getSongs();
    }

    getSongs(): void {
        this.songsService.getSongs(this.route.snapshot.paramMap.get('bandname'))
            .subscribe(songs => this.songs = songs);
    }
    
}