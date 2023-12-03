import { RouterModule, Routes } from "@angular/router";
import { RainbowComponent } from "./components/rainbow/rainbow.component";
import { WordComponent } from "./components/word/word.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailComponent } from "./cv/detail/detail.component";
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent } from "./components/login/login.component";
import { OperationsComponent } from "./components/operations/operations.component";
import {ProductComponent} from "./components/products/product/product.component";
import {cvResolver} from "./cv/resolvers/cv.resolver";
import {detailResolver} from "./cv/resolvers/detail.resolver";
import {MasterComponent} from "./cv/master/master.component";
import {AddComponent} from "./cv/add/add.component";



const APP_ROUTING: Routes = [
    {
        path:'cv',children: [
            {path: '', component: CvComponent,resolve:{cvs:cvResolver} },
            {path:'list',component:MasterComponent,resolve:{cvs:cvResolver},children: [
                {
                  path: ':id',
                  component: DetailComponent,
                  resolve: { cv: detailResolver },
                },
              ],},
            {path:'add',component:AddComponent},
            {path: ':id', component: DetailComponent,resolve:{cv: detailResolver}},
        ],

    }
    ,
    {path: 'rainbow', component: RainbowComponent},
    {path: 'products', component: ProductComponent},
    {path: 'word', component: WordComponent},
    {path: 'login', component: LoginComponent},
    {path: 'NotFound', component: ErrorComponent},
    {path: 'operations', component: OperationsComponent},
    {path: '**', component: ErrorComponent},
];

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
