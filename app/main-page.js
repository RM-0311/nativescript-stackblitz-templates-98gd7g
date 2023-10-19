import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function goToBioPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('bio-page');
}
export function goToSkillsPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('skills-page');
}
export function goToContactPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('contact-page');
}


