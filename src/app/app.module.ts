import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { WordComponent } from './components/word/word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RainbowDirective } from './directive/rainbow.directive';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './cv/search/search.component';
import { OperationsComponent } from './components/operations/operations.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { MasterComponent } from './cv/master/master.component';
import { AddComponent } from './cv/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailCvComponent,
    WordComponent,
    RainbowDirective,
    RainbowComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    DetailComponent,
    ErrorComponent,
    LoginComponent,
    SearchComponent,
    OperationsComponent,
    ProductComponent,
    ProductItemComponent,
    MasterComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule,
    ROUTING,
  	ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
