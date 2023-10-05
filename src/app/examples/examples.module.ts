import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistroComponent } from './registro/registro.component';
import { ReunionComponent } from './reunion/reunion.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        HomeComponent,
        ProfileComponent,
        RegistroComponent,
        ReunionComponent,
        ContactoComponent
    ]
})
export class ExamplesModule { }
