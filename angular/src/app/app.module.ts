import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewuserComponent } from './components/newuser/newuser.component';
import { StudentComponent } from './components/student/student.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { CalanderComponent } from './components/calander/calander.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { DeterminingLessonsComponent } from './components/determining-lessons/determining-lessons.component';
import { MatCardModule } from '@angular/material/card';
import { FileComponent } from './components/file/file.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { MatInputModule } from '@angular/material/input';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './components/about/about.component';
import { TeacherHeaderComponent } from './components/teacher-header/teacher-header.component';
import { StudentHeaderComponent } from './components/student-header/student-header.component';
import { MatToolbarModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule } from '@angular/material';
import { NavbarModule, WavesModule, ButtonsModule, MDBBootstrapModule } from 'ng-uikit-pro-standard';
import { HomeComponent } from './components/home/home.component'
import { AuInterceptor } from './services/auth.interceptor';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { ExitComponent } from './components/exit/exit.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
///////////////////google map
import { AgmCoreModule } from '@agm/core';
// import { AgmDirectionModule } from 'agm-direction';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete'
import {NgxLoadingModule, ngxLoadingAnimationTypes} from 'ngx-loading';
import { StudentCalanderComponent } from './components/student-calander/student-calander.component';
// import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { TeacherhomeComponent } from './components/teacherhome/teacherhome.component';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { FootrerComponent } from './components/footrer/footrer.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { RecommandationComponent } from './components/recommandation/recommandation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NewuserComponent,
    StudentComponent,
    NewTeacherComponent,
    NewStudentComponent,
    CalanderComponent,
    SearchComponent,
    TeacherComponent,
    DeterminingLessonsComponent,
    FileComponent,
    UpdateStudentComponent,
    UpdateTeacherComponent,
    AddLessonComponent,
    HeaderComponent,
    AboutComponent,
    TeacherHeaderComponent,
    StudentHeaderComponent,
    HomeComponent,
    FilterPipe,
    ExitComponent,
    StudentCalanderComponent,
    StudentHomeComponent,
    TeacherhomeComponent,
    MyDialogComponent,
    FootrerComponent,
    AddTeacherComponent,
    ModalContainerComponent,
    ModalContentComponent,
    RecommandationComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    FlatpickrModule.forRoot(),
    GooglePlaceModule,
    MatStepperModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0)', 
      backdropBorderRadius: '0.01px',
      primaryColour: 'green', 
      secondaryColour: 'green', 
      tertiaryColour: 'green'
    }),
    AgmCoreModule.forRoot(  {
      // 'AIzaSyAXOIyi-qEZPy2bPZPfnYys00P5-nftEQI'
      apiKey: 'AIzaSyBbIq37gLwEao0cp13EOEylr-laFoY2eiI'
      ,
     libraries: ["places"]
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
   
  providers: [  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},DatePipe,{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' },
  { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuInterceptor,
    multi: true
  },],
  entryComponents: [ ModalContentComponent,HomeComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
