import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TimicleComponent } from './components/timicle/timicle.component';
import { TimicleSercice } from './services/timicle.service';
import { CommonModule } from '@angular/common';
const routes: Routes = [{
    path: 'timicle/:id',
    component: TimicleComponent
}];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, CommonModule],
    declarations:[TimicleComponent],
    providers:[TimicleSercice]
})
export class TimicleModule {}
