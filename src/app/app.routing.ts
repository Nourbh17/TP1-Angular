import { RouterModule, Routes } from "@angular/router";
import { RainbowComponent } from "./components/rainbow/rainbow.component";
import { WordComponent } from "./components/word/word.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailComponent } from "./cv/detail/detail.component";
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent } from "./components/login/login.component";



const APP_ROUTING: Routes = [
    {
        path:'cv',children: [
            {path: '', component: CvComponent},
            {path: ':id', component: DetailComponent},    
        ]
    }
    ,
    {path: 'rainbow', component: RainbowComponent},
    {path: 'word', component: WordComponent},
    {path: 'login', component: LoginComponent},
    {path: 'NotFound', component: ErrorComponent},
    {path: '**', component: ErrorComponent},
];

export const ROUTING =RouterModule.forRoot(APP_ROUTING);