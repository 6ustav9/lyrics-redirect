import { Component } from "@angular/core";

@Component({
    selector: 'app-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.sass']
})
export class MoreComponent {
    
    project_version_links = [
        {
            link: "https://lyrics-redirect-ajs.netlify.app",
            name: "Lyrics Redirect Version 1",
            githubUser: "6ust",
            githubProject: "https://github.com/6ust/lyrics-redirect",
            description: "Angular JS com CSS3 - Disponibilizado por Netlify"
        },
        {
            link: "https://lyricsredirect.herokuapp.com",
            name: "Lyrics Redirect Version 2",
            githubUser: "6ust",
            githubProject: "https://github.com/6ust/heroku-lyrics-angular",
            description: "Angular 11 com CSS3 - Disponibilizado por Heroku"
        },
        {
            link: "https://lyrics-redirect.vercel.app",
            name: "Lyrics Redirect Version 3",
            githubUser: "6ustav9",
            githubProject: "https://github.com/6ustav9/lyrics-redirect",
            description: "Angular 14 com SASS, consumindo Json Server - Disponibilizado por Vercel e Heroku"
        }

        
    ];

    constructor() {}
}