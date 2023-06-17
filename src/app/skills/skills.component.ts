import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  options: AnimationOptions = {
    path: 'assets/skills.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      progressiveLoad: true
    },
    autoplay: true,
    loop: true
  };

  animationWidth = '';
  animationHeight = '';

  ngOnInit() {
    this.setAnimationSize();
    window.addEventListener('resize', () => {
      this.setAnimationSize();
    });
  }

  setAnimationSize() {
    const isMobile = window.innerWidth < 576; // Define the breakpoint for mobile devices

    if (isMobile) {
      this.animationWidth = '300px'; // Set the width for mobile devices
      this.animationHeight = 'auto'; // Set the height for mobile devices
    } else {
      this.animationWidth = '600px'; // Set the width for other devices
      this.animationHeight = 'auto'; // Set the height for other devices
    }
  }
}
