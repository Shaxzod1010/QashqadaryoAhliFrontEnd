import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilterComponent } from "./filter/filter.component";
import { HomeComponent } from "./home/home.component";
import { UzbekistonComponent } from "./uzbekiston/uzbekiston.component";


const linklar: Routes = [
  {path : " " , component: HomeComponent},
  {path: "uzbekiston" , component : UzbekistonComponent},
  { path: "filter", component: FilterComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(linklar),
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
