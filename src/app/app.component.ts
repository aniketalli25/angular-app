import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { FeaturesComponent } from './features/features.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FooterComponent } from './footer/footer.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ProjectInquiryComponent } from './project-inquiry/project-inquiry.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
      HeaderComponent,
      BannerComponent,
      CaseStudiesComponent,
      FeaturesComponent,
      FeedbackComponent,
      DigitalMarketingComponent,
      ContactComponent,
      ContactDetailsComponent,
      FooterComponent,
    ContactModalComponent,
    ProjectInquiryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoProject';

}
